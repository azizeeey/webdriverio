export class APIDemosPage {
    static appBtn() {
        return $('//android.widget.TextView[@content-desc="App"]');
    }
    
    static searchBtn() {
        return $('//android.widget.TextView[@content-desc="Search"]');
    }

    static InvokeSearchBtn() {
        return $('//android.widget.TextView[@content-desc="Invoke Search"]');
    }

    static prefillQueryField() {
        return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/txt_query_prefill"]');
    }

    static appDataField() {
        return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/txt_query_appdata"]')
    }

    static alertDialogsBtn() {
        return $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
    }

    static textEntrydialogBtn() {
        return $('//*[@content-desc="Text Entry dialog" or contains(@text, "Text Entry") or @text="Text Entry dialog"]');
    }

    // Dialog fields: use indexed EditText as primary selector (first/second EditText)
    static nameField() {
        return $('(//android.widget.EditText)[1]');
    }

    static passwordField() {
        return $('(//android.widget.EditText)[2]');
    }

    static okButton() {
        return $('//android.widget.Button[@text="OK"]');
    }
}