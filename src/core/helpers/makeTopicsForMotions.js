const topics = require('./data/topics')
const fs = require('fs');
const topicsForMotions = []
topics.forEach(topic => {
    const topicForMotion = {
        value: {
            [`${topic.value}`]: {
                "check": true,
                "title": `${topic.label}`
            }
        },
        label: `${topic.label}`
    }
    topicsForMotions.push(topicForMotion)
})
console.log(topicsForMotions)
let topicsForMotionsJSON = JSON.stringify(topicsForMotions, null, 4)
fs.writeFile(`data/topicsForMotions.js`,`export const topicsForMotions = ${topicsForMotionsJSON}`, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved.");
});

