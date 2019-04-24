const fs = require('fs')

const defaultSettings = {
    "channel": "",
    "executablePath": "",
    "credentials": {
        "username": "",
        "password": ""
    }
};

fs.writeFile('settings.json', JSON.stringify(defaultSettings, null, 4), (error) => {
    console.log('Generated settings.json in project root...');
});

fs.mkdir('screenshots');