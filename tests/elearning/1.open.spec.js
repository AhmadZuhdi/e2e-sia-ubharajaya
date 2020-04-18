const constants = require('../../constants');
const moment = require('moment');

module.exports = {
    'open sia': browser => {
        return browser
            .url('http://elearning.ubharajaya.ac.id/login/index.php')
            .assert.titleContains('E-Learning Universitas Bhayangkara Jakarta Raya: Log in to the site')
            .assert.visible(constants.usernameInput)
            .assert.visible(constants.passwordInput)
            .saveScreenshot(`./reports/elearning/${moment().format('YYYY-MM-DD')}/open-elearning.png`)
    }
};
