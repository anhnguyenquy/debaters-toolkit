const fetch = require("node-fetch");
const fs = require('fs');
const run = async () => {
    let numCount = 1;
    let firstPart = 'https://spreadsheets.google.com/feeds/cells/10_KEaM4jA5tnMPp4OD9eXnR7n_zx3rOtPnw6YW2ww5M/'
    let secondPart = '/public/full?alt=json'
    for (let i = 1; i<=13; i++) {
        const fullURL = `${firstPart}${i}${secondPart}`
        const jsonResponse = await fetch(`${fullURL}`);
        const jsonData = await jsonResponse.json();
        const jsonString = JSON.stringify(jsonData);
        fs.writeFile(`data/${i}.json`, jsonString, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
            console.log("JSON file has been saved.");
        });
    }
}
run();