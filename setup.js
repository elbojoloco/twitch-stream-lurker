const fs = require('fs')

const defaultSettings = {
    "channel": "",
    "executablePath": "",
    "credentials": {
        "username": "",
        "password": ""
    }
};

fs.writeFile('settings.json', JSON.stringify(defaultSettings, null, 4), error => {
    if (error) throw error;

    console.log('Generated settings.json in project root...');
});

fs.mkdir('screenshots', error => {
    if (error) throw error;

    console.log('Added "screenshots" directory...');
});