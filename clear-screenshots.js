const fs = require('fs');
const path = require('path');

const directory = 'screenshots';

fs.readdir(directory, (error, files) => {
    if (error) throw error;

    for (const file of files) {
        fs.unlink(path.join(directory, file), error => {
            if (error) throw error;
        });
    }
});

console.log('Screenshots deleted.');