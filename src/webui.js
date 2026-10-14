// A small Katalon "WebUI" compatibility layer built on Playwright.
//
// The converted test cases call the same keywords they used in Katalon
// (web.click, web.setText, web.verifyElementPresent ...) with the same
// Object Repository paths, so each converted file can be compared line by
// line with the original Groovy script. Locators live in src/objects.json.
const OBJECTS = require('./objects.json');

const SECOND = 1000;
// Katalon's default element timeout was 30s, but the dev server sometimes takes longer
// than that to return a page (e.g. edit.aspx), so allow 60s.
const DEFAULT_TIMEOUT = 60 * SECOND;

function normKey(key) {
  return String(key).replace(/^Object Repository\//, '');
}

class WebUI {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.context = page.context();
    this.page = page;
    this.frameLocator = null; // set by switchToFrame
    this.frame = null;        // matching Frame object (for executeJavaScript)
    this.dialogs = [];        // alerts/confirms seen and not yet "accepted" by the script
    this._watchDialogs(page);
    this.context.on('page', (p) => this._watchDialogs(p));
  }

  // Katalon leaves the alert open until acceptAlert(). Playwright would dismiss it
  // automatically, so every dialog is accepted as soon as it opens and remembered;
  // acceptAlert()/verifyAlertPresent() then check that it really appeared.
  _watchDialogs(p) {
    p.on('dialog', async (d) => {
      this.dialogs.push({ type: d.type(), message: d.message() });
      console.log(`[alert] ${d.type()}: ${d.message()}`);
      await d.accept().catch(() => {});
    });
  }

  async _waitForDialog(timeoutMs) {
    const end = Date.now() + timeoutMs;
    while (Date.now() < end) {
      if (this.dialogs.length) return true;
      await this.page.waitForTimeout(250);
    }
    return this.dialogs.length > 0;
  }

  // -------------------------------------------------------------------------
  // Locating elements
  // -------------------------------------------------------------------------
  _object(key) {
    const k = normKey(key);
    const o = OBJECTS[k];
    if (!o) throw new Error(`Test object not found in src/objects.json: ${k}`);
    return { key: k, ...o };
  }

  _root(o) {
    let root = this.frameLocator || this.page;
    if (o.frame) root = root.frameLocator(this._object(o.frame).selector);
    return root;
  }

  /**
   * Returns a locator for a Katalon test object, waiting for it to exist.
   * Like Katalon's self-healing, if the main selector finds nothing the other
   * locators recorded for the object are tried before failing.
   */
  async find(key, timeoutMs = DEFAULT_TIMEOUT, state = 'attached') {
    const o = this._object(key);
    const root = this._root(o);
    const primary = root.locator(o.selector).first();
    try {
      await primary.waitFor({ state, timeout: timeoutMs });
      return primary;
    } catch (err) {
      for (const sel of o.fallbacks || []) {
        const alt = root.locator(sel).first();
        if (await alt.count().catch(() => 0)) {
          console.warn(`[self-healing] ${o.key}\n   main selector failed: ${o.selector}\n   used instead:        ${sel}`);
          return alt;
        }
      }
      throw new Error(`Element not found after ${timeoutMs / SECOND}s: ${o.key}\n  selector: ${o.selector}`);
    }
  }

  async _handle(failureHandling, action, fallbackValue) {
    try {
      return await action();
    } catch (err) {
      if (failureHandling === 'OPTIONAL' || failureHandling === 'CONTINUE_ON_FAILURE') {
        console.warn(`[${failureHandling}] ${err.message.split('\n')[0]}`);
        return fallbackValue;
      }
      throw err;
    }
  }

  async _afterAction() {
    // Katalon "smart wait": give a page load started by the action a moment to begin,
    // then let it finish. (Clicks use noWaitAfter, so the wait happens here instead.)
    // The action may close the current window (e.g. the Close button of a popup),
    // so never fail here - the next switchToWindowIndex() picks the right window.
    const p = this.page;
    if (p.isClosed()) return;
    await p.waitForTimeout(500).catch(() => {});
    if (p.isClosed()) return;
    await p.waitForLoadState('load', { timeout: DEFAULT_TIMEOUT }).catch(() => {});
  }

  // -------------------------------------------------------------------------
  // Browser / navigation
  // -------------------------------------------------------------------------
  async openBrowser(url = '') { if (url) await this.navigateToUrl(url); }
  async closeBrowser() { /* Playwright closes the browser after each test */ }
  async maximizeWindow() { /* viewport size is set in playwright.config.js */ }
  async navigateToUrl(url) { await this.page.goto(String(url)); }
  async refresh() { await this.page.reload(); }
  async getUrl() { return this.page.url(); }
  async getWindowTitle() {
    // Wait for the page to finish loading and have a title (the page may still be
    // navigating after the previous click).
    await this.page.waitForLoadState('load', { timeout: DEFAULT_TIMEOUT }).catch(() => {});
    const end = Date.now() + 10 * SECOND;
    let title = await this.page.title().catch(() => '');
    while (!title && Date.now() < end) {
      await this.page.waitForTimeout(250);
      title = await this.page.title().catch(() => '');
    }
    return title;
  }
  async delay(seconds) { await this.page.waitForTimeout(Number(seconds) * SECOND); }
  async sleep(ms) { await this.page.waitForTimeout(Number(ms)); }
  async print(msg) { console.log(msg); }

  async switchToWindowIndex(index) {
    const end = Date.now() + DEFAULT_TIMEOUT;
    while (this.context.pages().length <= index) {
      if (Date.now() > end) throw new Error(`Window with index ${index} did not open`);
      await new Promise((r) => setTimeout(r, 250));
    }
    this.page = this.context.pages()[index];
    this.frameLocator = null;
    this.frame = null;
    await this.page.bringToFront();
    await this.page.waitForLoadState('domcontentloaded').catch(() => {});
  }

  async closeWindowIndex(index) {
    const p = this.context.pages()[index];
    if (!p) throw new Error(`No window with index ${index}`);
    await p.close();
  }

  async switchToFrame(key, timeoutSeconds = 30) {
    const frameEl = await this.find(key, timeoutSeconds * SECOND);
    const o = this._object(key);
    this.frameLocator = this._root(o).frameLocator(o.selector);
    this.frame = await (await frameEl.elementHandle()).contentFrame();
    return true;
  }

  async switchToDefaultContent() {
    this.frameLocator = null;
    this.frame = null;
  }

  /**
   * Burger menu -> Publishing -> Folders, as in the Katalon scripts.
   * Some sites (profile "folderspagefallback": true) have no burger menu; there, when it is
   * not on the page, go straight to <domainname>folders.aspx instead.
   */
  async openFoldersPage() {
    const burger = 'Common Article_Forms_Page_Objects/Publishing Folder/Backend admin page/burger menu click';
    const { G } = require('./helpers');
    if (G.folderspagefallback) {
      const o = this._object(burger);
      const found = await this._root(o).locator(o.selector).first()
        .waitFor({ state: 'visible', timeout: 5 * SECOND }).then(() => true, () => false);
      if (!found) {
        const url = new URL('folders.aspx', G.domainname).href;
        console.log(`[folders page] burger menu not on this site - going to ${url}`);
        await this.navigateToUrl(url);
        return;
      }
    }
    await this.click(burger);
    await this.click('Common Article_Forms_Page_Objects/Publishing Folder/Navigate to Publishing/Click Publishing');
    await this.click('Common Article_Forms_Page_Objects/Publishing Folder/Naviagte to publishing Folders/Click Folders');
  }

  /**
   * Starts waiting for the form designer to (re)load its fields: call it before the click that
   * triggers the reload, and await the result after the click. Most sites (e.g. ec12-5) send a
   * GetExistingFields request; when none comes within 20s (e.g. Mecca), wait for the page to
   * settle with the Form Items toolbar showing instead.
   */
  waitForFormDesigner() {
    const page = this.page;
    return page.waitForResponse((r) => /GetExistingFields/i.test(r.url()), { timeout: 20 * SECOND })
      .catch(async () => {
        console.warn('[form designer] no GetExistingFields response within 20s - waiting for the page to settle instead');
        await page.waitForLoadState('networkidle', { timeout: 30 * SECOND }).catch(() => {});
        await page.getByText('New Panel', { exact: true }).first().waitFor({ state: 'visible', timeout: 30 * SECOND });
      });
  }

  /**
   * Picks an item (a group, a user) in a type-ahead picker: type text, then choose from its
   * drop-down. Sites name their groups and users differently (e.g. Mecca has no System or
   * Administrators group and no Web Master user), so pass the preferred search text first and
   * fallbacks after it: each is typed in turn until the drop-down (inside listScope) shows a
   * matching item, which is then clicked.
   * Returns the chosen item's text, or '' when nothing matched any of the searches.
   */
  async pickFromDropdown(inputKey, listScope, searches, waitSeconds = 10) {
    for (const search of searches) {
      await this.setText(inputKey, search);
      const pattern = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      const option = this.page.locator(`${listScope} li`).filter({ hasText: pattern, visible: true }).first();
      if (await option.waitFor({ state: 'visible', timeout: waitSeconds * SECOND }).then(() => true, () => false)) {
        const name = (await option.innerText()).trim();
        await option.click();
        await this._afterAction();
        console.log(`[picker] typed "${search}", chose "${name}"`);
        return name;
      }
      console.warn(`[picker] nothing matching "${search}" on this site`);
    }
    return '';
  }

  /**
   * Starts watching the background uploads (Telerik "rau" requests) that picking files in a
   * Document / Image Manager upload box sends. Call it before picking the files; then call
   * wait() before clicking the page's Upload button. Clicking Upload while an upload is still
   * running aborts it and saves nothing, which happens on slower sites (e.g. Mecca). wait()
   * never fails the test: it returns once no upload is running, or after timeoutSeconds.
   */
  trackUploads() {
    const page = this.page;
    const pending = new Set();
    const isUpload = (r) => /WebResource.axd?type=rau/i.test(r.url());
    const start = (r) => { if (isUpload(r)) pending.add(r); };
    const done = (r) => pending.delete(r);
    page.on('request', start);
    page.on('requestfinished', done);
    page.on('requestfailed', done);
    return {
      wait: async (timeoutSeconds = 60) => {
        const end = Date.now() + timeoutSeconds * SECOND;
        await page.waitForTimeout(1000);
        while (pending.size && Date.now() < end) await page.waitForTimeout(500);
        if (pending.size) console.warn(`[uploads] ${pending.size} upload(s) still running after ${timeoutSeconds}s`);
        page.off('request', start);
        page.off('requestfinished', done);
        page.off('requestfailed', done);
      },
    };
  }

  /**
   * The display name of the logged-in user, read from the "Welcome <name>" label in the admin
   * header (e.g. "Web Master" on ec12-5, "Helpdesk Elcom" on Mecca). '' when the page has none.
   */
  async loggedInUserName() {
    return this.page.evaluate(() => {
      for (const el of document.querySelectorAll('body *')) {
        if (el.children.length === 0 && el.textContent.trim() === 'Welcome') {
          const name = el.nextElementSibling && el.nextElementSibling.textContent.trim();
          if (name) return name;
        }
      }
      return '';
    }).catch(() => '');
  }

  // -------------------------------------------------------------------------
  // Actions
  // -------------------------------------------------------------------------
  async click(key, failureHandling) {
    return this._handle(failureHandling, async () => {
      const el = await this.find(key);
      // Admin menu links (e.g. Security > Users, Reports) are on the page but stay hidden on
      // some sites (e.g. ec13-0) when their menu section is not expanded. When a link stays
      // hidden for 15s, open its address instead of waiting for a click that cannot happen.
      if (!(await el.waitFor({ state: 'visible', timeout: 15 * SECOND }).then(() => true, () => false))) {
        const href = await el.evaluate((n) => {
          const a = n.closest('a');
          return a && a.href && !/^javascript:/i.test(a.getAttribute('href') || '') ? a.href : '';
        }).catch(() => '');
        if (href) {
          console.warn(`[hidden link] ${normKey(key)} is not visible - opening ${href}`);
          await this.navigateToUrl(href);
          await this._afterAction();
          return;
        }
      }
      await el.click({ noWaitAfter: true });
      await this._afterAction();
    });
  }

  async rightClick(key, failureHandling) {
    return this._handle(failureHandling, async () => {
      await (await this.find(key)).click({ button: 'right' });
    });
  }

  async mouseOver(key, failureHandling) {
    return this._handle(failureHandling, async () => {
      // Like Katalon/Selenium: move the mouse there even if another element (e.g. an
      // element's hover controls) is on top of it.
      await (await this.find(key)).hover({ force: true });
    });
  }

  /** Katalon setText = clear the field, then type the text key by key. */
  async setText(key, text, failureHandling) {
    return this._handle(failureHandling, async () => {
      const el = await this.find(key);
      try {
        await el.fill('');
      } catch {
        // e.g. the body of a rich-text editor iframe (designMode) - clear it with the keyboard
        await el.click();
        await el.press('ControlOrMeta+A');
        await el.press('Delete');
      }
      if (text !== '' && text !== null && text !== undefined) await el.pressSequentially(String(text));
    });
  }

  /** Same as setText, but the value is never written to the log. */
  async setEncryptedText(key, secret, failureHandling) {
    return this._handle(failureHandling, async () => {
      await (await this.find(key)).fill(String(secret));
    });
  }

  async clearText(key, failureHandling) {
    return this._handle(failureHandling, async () => {
      await (await this.find(key)).fill('');
    });
  }

  async getText(key, failureHandling) {
    return this._handle(failureHandling, async () => {
      // innerText puts a tab between table cells; Katalon/Selenium getText uses a space.
      return (await (await this.find(key)).innerText()).replace(/\t+/g, ' ').trim();
    }, '');
  }

  async uploadFile(key, filePath, failureHandling) {
    return this._handle(failureHandling, async () => {
      await (await this.find(key)).setInputFiles(String(filePath));
    });
  }

  async scrollToElement(key, timeoutSeconds = 30, failureHandling) {
    return this._handle(failureHandling, async () => {
      await (await this.find(key, timeoutSeconds * SECOND)).scrollIntoViewIfNeeded();
    });
  }

  async selectOptionByIndex(key, index, failureHandling) {
    return this._handle(failureHandling, async () => {
      await (await this.find(key)).selectOption({ index: Number(index) });
      await this._afterAction();
    });
  }

  async selectOptionByValue(key, value, isRegex = false, failureHandling) {
    return this._handle(failureHandling, async () => {
      const el = await this.find(key);
      if (isRegex) {
        const values = await el.locator('option').evaluateAll((opts) => opts.map((o) => o.value));
        const re = new RegExp(`^(?:${value})$`);
        const match = values.find((v) => re.test(v));
        if (match === undefined) throw new Error(`No option value matches /${value}/ in ${normKey(key)}`);
        await el.selectOption({ value: match });
      } else {
        await el.selectOption({ value: String(value) });
      }
      await this._afterAction();
    });
  }

  async selectOptionByLabel(key, label, isRegex = false, failureHandling) {
    return this._handle(failureHandling, async () => {
      const el = await this.find(key);
      if (isRegex) {
        const labels = await el.locator('option').evaluateAll((opts) => opts.map((o) => o.label));
        const re = new RegExp(`^(?:${label})$`);
        const match = labels.find((l) => re.test(l));
        if (match === undefined) throw new Error(`No option label matches /${label}/ in ${normKey(key)}`);
        await el.selectOption({ label: match });
      } else {
        await el.selectOption({ label: String(label) });
      }
      await this._afterAction();
    });
  }

  async findWebElement(key, timeoutSeconds = 30) {
    return (await this.find(key, timeoutSeconds * SECOND)).elementHandle();
  }

  /**
   * Selenium-style executeJavaScript: the script can use arguments[0], arguments[1] ...
   * `args` is a list of element handles (from findWebElement) or null.
   */
  async executeJavaScript(script, args) {
    const handles = args ? await Promise.all(args) : [];
    let target = this.frame || this.page;
    if (handles.length && handles[0] && handles[0].ownerFrame) {
      target = (await handles[0].ownerFrame()) || target;
    }
    const run = () => target.evaluate(
      ({ source, params }) => new Function(source).apply(null, params),
      { source: script, params: handles },
    );
    try {
      return await run();
    } catch (err) {
      // Selenium waits for a page load started by the previous step; if the page
      // navigated while the script ran, wait for the new page and run it there.
      if (handles.length || !/Execution context was destroyed/.test(err.message)) throw err;
      await this.page.waitForLoadState('domcontentloaded').catch(() => {});
      return run();
    }
  }

  /** The hoverAndJsClick helper that several Katalon scripts defined. */
  async hoverAndJsClick(hoverKey, clickKey) {
    await this.waitForElementVisible(hoverKey, 20);
    await this.mouseOver(hoverKey);
    await this.waitForElementPresent(clickKey, 20);
    await this.executeJavaScript("arguments[0].scrollIntoView({block:'center'});", [this.findWebElement(clickKey, 10)]);
    await this.executeJavaScript('arguments[0].click();', [this.findWebElement(clickKey, 10)]);
    await this._afterAction();
  }

  // -------------------------------------------------------------------------
  // Alerts
  // -------------------------------------------------------------------------
  async acceptAlert(failureHandling) {
    return this._handle(failureHandling, async () => {
      if (!(await this._waitForDialog(10 * SECOND))) throw new Error('acceptAlert: no alert was shown');
      this.dialogs.shift();
      await this._afterAction();
    });
  }

  async waitForAlert(timeoutSeconds) {
    return this._waitForDialog(Number(timeoutSeconds) * SECOND);
  }

  async verifyAlertPresent(timeoutSeconds, failureHandling) {
    return this._handle(failureHandling, async () => {
      if (!(await this._waitForDialog(Number(timeoutSeconds) * SECOND))) {
        throw new Error(`verifyAlertPresent: no alert within ${timeoutSeconds}s`);
      }
      return true;
    }, false);
  }

  // -------------------------------------------------------------------------
  // Waits (return true/false, never fail the test - same as Katalon)
  // -------------------------------------------------------------------------
  async _waitState(key, timeoutSeconds, state) {
    try {
      await this.find(key, Number(timeoutSeconds) * SECOND, state);
      return true;
    } catch {
      console.warn(`[wait] ${normKey(key)} not ${state} within ${timeoutSeconds}s`);
      return false;
    }
  }

  async waitForElementPresent(key, timeoutSeconds) { return this._waitState(key, timeoutSeconds, 'attached'); }
  async waitForElementVisible(key, timeoutSeconds) { return this._waitState(key, timeoutSeconds, 'visible'); }

  async waitForElementClickable(key, timeoutSeconds) {
    const end = Date.now() + Number(timeoutSeconds) * SECOND;
    if (!(await this._waitState(key, timeoutSeconds, 'visible'))) return false;
    const el = await this.find(key, 1000).catch(() => null);
    while (el && Date.now() < end) {
      if (await el.isEnabled().catch(() => false)) return true;
      await this.page.waitForTimeout(250);
    }
    return el ? el.isEnabled().catch(() => false) : false;
  }

  // -------------------------------------------------------------------------
  // Verifications (fail the test unless failureHandling is OPTIONAL)
  // -------------------------------------------------------------------------
  async verifyElementPresent(key, timeoutSeconds, failureHandling) {
    return this._handle(failureHandling, async () => {
      await this.find(key, Number(timeoutSeconds) * SECOND, 'attached');
      return true;
    }, false);
  }

  async verifyElementVisible(key, failureHandling) {
    return this._handle(failureHandling, async () => {
      const el = await this.find(key);
      if (!(await el.isVisible())) throw new Error(`Element is not visible: ${normKey(key)}`);
      return true;
    }, false);
  }

  async verifyElementNotChecked(key, timeoutSeconds, failureHandling) {
    return this._handle(failureHandling, async () => {
      const el = await this.find(key, Number(timeoutSeconds) * SECOND);
      if (await el.isChecked()) throw new Error(`Element is checked: ${normKey(key)}`);
      return true;
    }, false);
  }

  async _pageText() {
    const root = this.frameLocator || this.page;
    return root.locator('body').innerText().catch(() => '');
  }

  async verifyTextPresent(text, isRegex = false, failureHandling) {
    return this._handle(failureHandling, async () => {
      const matches = (body) => (isRegex ? new RegExp(text).test(body) : body.includes(String(text)));
      // After a Save the page can still be blank while it reloads, so wait for the load to
      // finish and keep checking for up to 30 s (it returns as soon as the text appears).
      const end = Date.now() + 30 * SECOND;
      await this.page.waitForLoadState('load', { timeout: 30 * SECOND }).catch(() => {});
      while (Date.now() < end) {
        if (matches(await this._pageText())) return true;
        await this.page.waitForTimeout(500);
      }
      throw new Error(`verifyTextPresent: text not found on page: "${text}"`);
    }, false);
  }

  async verifyTextNotPresent(text, isRegex = false, failureHandling) {
    return this._handle(failureHandling, async () => {
      const body = await this._pageText();
      const found = isRegex ? new RegExp(text).test(body) : body.includes(String(text));
      if (found) throw new Error(`verifyTextNotPresent: text is on the page: "${text}"`);
      return true;
    }, false);
  }
}

module.exports = { WebUI };
