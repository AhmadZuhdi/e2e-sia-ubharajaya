require('dotenv').config();
const loginTest = require('./2.login.spec');
const constants = require('./../constants');
const moment = require('moment');

module.exports = {
    ...loginTest,
    'view khs': browser => {
        browser
            .click("xpath", "//*[contains(text(), 'Akademik')]")
            .click("xpath", "//*[contains(text(), 'Nilai KHS Mahasiswa')]")
            .useXpath().waitForElementVisible("//*[contains(text(), 'Data Kartu Hasil Studi')]")
            .saveScreenshot(`./reports/${moment().format('YYYY-MM-DD')}/view-khs-sia.png`)
            .end();
    }
};
