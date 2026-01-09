import * as path from 'path'; 
const appPath = path.join(__dirname, 'apk', 'ApiDemos-debug.apk');

export const config: WebdriverIO.Config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    
    port: 4723,
    
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/specs/**/*.ts'
    ],
    exclude: [
    ],

    // ============
    // Capabilities
    // ============
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Android Emulator', 
        'appium:platformVersion': '16.0', 
        'appium:automationName': 'UiAutomator2',
        'appium:app': appPath,
        'appium:noReset': false 
    }],

    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    // ===================
    // SERVICES SETUP
    // ===================
    services: [
        ['appium', {
            args: {
                address: '127.0.0.1',
                port: 4723
            },
            command: 'appium',
        }],
    ],

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // ===================
    // ALLURE REPORTER
    // ===================
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: true,
    }]]
}