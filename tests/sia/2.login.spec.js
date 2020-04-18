require('dotenv').config();
const openTest = require('./1.open.spec');
const constants = require('../../constants');
const moment = require('moment');

module.exports = {
    ...openTest,
    'login': browser => {
        browser
            .setValue(constants.usernameInput, process.env.USERNAME)
            .setValue(constants.passwordInput, process.env.PASSWORD)
            .click('button[type=submit]')
            .waitForElementVisible('.mainnav')
            .saveScreenshot(`./reports/${moment().format('YYYY-MM-DD')}/login-sia.png`);
    }
};
