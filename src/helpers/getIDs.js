const fs = require('fs');
const motions = require("./data/motionsFromDatabase.json")
const vietnameseIDs = [], englishIDs = [];
motions.forEach(motion => {
    if (motion.language == "English") {
        englishIDs.push(motion.id);
    }
    else if (motion.language == "Vietnamese") {
        vietnameseIDs.push (motion.id);    
    }
})
let englishIDsJSON = JSON.stringify(englishIDs);
let vietnameseIDsJSON = JSON.stringify(vietnameseIDs);
fs.writeFile(`data/vietnameseIDs.json`, vietnameseIDsJSON, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved.");
});
fs.writeFile(`data/englishIDs.json`, englishIDsJSON, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved.");
});