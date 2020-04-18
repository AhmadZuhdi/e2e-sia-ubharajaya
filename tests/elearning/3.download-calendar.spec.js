require('dotenv').config();
const loginTest = require('./2.login.spec');
const constants = require('../../constants');
const moment = require('moment');

const eventMenuSelectdor = "//*[contains(text(), 'Events')]";
const exportButtonSelector = "//*[contains(text(), 'Export calendar')]";
const allEventSelector = `#id_events_exportevents_all`;
const thisMonthSelector = `#id_period_timeperiod_monthnow`;
const generateUrlSelector = "input#id_generateurl";
const generatedUrlSelector = ".generalbox.calendarurl";

module.exports = {
    ...loginTest,
    'download calendar': browser => {
        browser
            .click("xpath", eventMenuSelectdor)
            .useXpath().waitForElementVisible(exportButtonSelector).useCss()
            .click("xpath", exportButtonSelector)
            .waitForElementVisible(allEventSelector)
            .click(allEventSelector)
            .click(thisMonthSelector)
            .click(generateUrlSelector)
            .waitForElementVisible(generatedUrlSelector)
            .saveScreenshot(`./reports/elearning/${moment().format('YYYY-MM-DD')}/download-calendar.png`)
            .end();
    }
};
