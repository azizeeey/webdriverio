import { APIDemosPage } from "../pageobjects/apidemos.page";

export class APIDemosActions {
    async waitForAppBtn() {
        await APIDemosPage.appBtn().waitForDisplayed({ timeout: 5000 });
    }

    async clickAppBtn() {
        await APIDemosPage.appBtn().click();
    }

    async verifyAppBtn() {
        return await APIDemosPage.appBtn().isDisplayed();
    }

    async ClickSearchBtn() {
        await APIDemosPage.searchBtn().click();
    }

    async ClickInvokeSearchBtn() {
        await APIDemosPage.InvokeSearchBtn().click();
    }

    async fillQueryField(query: string) {
        await APIDemosPage.prefillQueryField().setValue(query);
    }

    async fillAppDataField(query: string) {
        await APIDemosPage.appDataField().setValue(query);
    }

    async getQueryFieldValue() {
        return await APIDemosPage.prefillQueryField().getText();
    }

    async getAppDataFieldValue() {
        return await APIDemosPage.appDataField().getText();
    }

    async clickAlertDialogsBtn() {
        await APIDemosPage.alertDialogsBtn().click();
    }

    async clickTextEntrydialogBtn() {
        await browser.pause(500);
        let element = APIDemosPage.textEntrydialogBtn();
        try {
            await element.waitForDisplayed({ timeout: 5000 });
        } catch (err) {
            // fallback: use Android UiScrollable to bring item into view
            const scrollSelector = 'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().textContains("Text Entry"))';
            element = await $(scrollSelector);
            await element.waitForExist({ timeout: 7000 });
        }
        // ensure visible and clickable
        try { await element.scrollIntoView(); } catch (_) {}
        await browser.pause(300);
        await element.click();
}

    async fillNameField(name: string) {
        const el = APIDemosPage.nameField();
        try {
            await el.waitForDisplayed({ timeout: 5000 });
        } catch (err) {
            // give a bit more time if dialog animation is slow
            await browser.pause(500);
            await el.waitForDisplayed({ timeout: 5000 });
        }
        try { await el.click(); } catch (_) {}
        await browser.pause(200);
        await el.setValue(name);
        try { await driver.hideKeyboard(); } catch (_) {}
    }

    async fillPasswordField(password: string) {
        const el = APIDemosPage.passwordField();
        try {
            await el.waitForDisplayed({ timeout: 5000 });
        } catch (err) {
            await browser.pause(500);
            await el.waitForDisplayed({ timeout: 5000 });
        }
        try { await el.click(); } catch (_) {}
        await browser.pause(200);
        await el.setValue(password);
        try { await driver.hideKeyboard(); } catch (_) {}
    }

    async getNameFieldValue() {
        const el = APIDemosPage.nameField();
        try {
            await el.waitForExist({ timeout: 5000 });
        } catch (_) {
            await browser.pause(300);
            await el.waitForExist({ timeout: 3000 });
        }
        let txt = '';
        try {
            txt = await el.getText();
            if (!txt) txt = await el.getAttribute('text');
        } catch (_) {
            try { txt = await el.getAttribute('text'); } catch (_) { txt = ''; }
        }
        return txt;
    }

    async getPasswordFieldValue() {
        const el = APIDemosPage.passwordField();
        try {
            await el.waitForExist({ timeout: 5000 });
        } catch (_) {
            await browser.pause(300);
            await el.waitForExist({ timeout: 3000 });
        }
        let txt = '';
        try {
            txt = await el.getText();
            if (!txt) txt = await el.getAttribute('text');
        } catch (_) {
            try { txt = await el.getAttribute('text'); } catch (_) { txt = ''; }
        }
        return txt;
    }

    async getPasswordFieldMaskedValue() {
        const el = APIDemosPage.passwordField();
        try {
            await el.waitForExist({ timeout: 5000 });
        } catch (_) {
            await browser.pause(300);
            await el.waitForExist({ timeout: 3000 });
        }
        let txt = '';
        try {
            txt = await el.getText();
            if (!txt) txt = await el.getAttribute('text');
        } catch (_) {
            try { txt = await el.getAttribute('text'); } catch (_) { txt = ''; }
        }
        return txt;
    }

    async isPasswordField() {
        const el = APIDemosPage.passwordField();
        try {
            const attr = await el.getAttribute('password');
            return attr === 'true' || attr === '1';
        } catch (_) {
            return false;
        }
    }

    async clickOkButton() {
        await APIDemosPage.okButton().click();
    }
}