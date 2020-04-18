const constants = require('../../constants');
const moment = require('moment');

module.exports = {
    'open sia': browser => {
        return browser
            .url('http://sia.ubharajaya.ac.id/')
            // .waitForElementVisible(constants.usernameInput)
            .assert.titleContains('SISTEM INFORMASI AKADEMIK UBHARA JAYA')
            .assert.visible(constants.usernameInput)
            .assert.visible(constants.passwordInput)
            .saveScreenshot(`./reports/${moment().format('YYYY-MM-DD')}/open-sia.png`)
    }
};
