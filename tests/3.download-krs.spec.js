require('dotenv').config();
const loginTest = require('./2.login.spec');
const constants = require('./../constants');
const moment = require('moment');

module.exports = {
    ...loginTest,
    'download krs': browser => {
        browser
            .click("xpath", "//*[contains(text(), 'Akademik')]")
            .click("xpath", "//*[contains(text(), 'KRS Mahasiswa')]")
            .click("a.btn.btn-success.btn-small")
            .useXpath().waitForElementVisible("//*[contains(text(), 'Print KRS')]")
            .click("xpath", "//*[contains(text(), 'Print KRS')]")
            .pause(1500)
            .saveScreenshot(`./reports/${moment().format('YYYY-MM-DD')}/download-krs-sia.png`)
            .end();
    }
};
