//motionDataRaw.json was scraped from hellomotions.com which belongs to Jessica Yung
/* 
MIT License

Copyright (c) 2016 Jessica Yung.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
const fs = require('fs');
const _ = require('lodash');
const motionDataRaw = require('./data/motionDataRaw.json');
let tourneys = [];
for (let motion of motionDataRaw) {
    let date = new Date(motion.Date);
    let year = date.getFullYear().toString();
    if (year == "NaN") {
        year = ""
    }
    let tournament = motion.Tournament;
    let firstFour = tournament.slice(0,4)
    let lastFour = tournament.slice(-4)
    if (!isNaN(lastFour)) {
        year = lastFour
        tournament = tournament.slice(0, -5)
    }
    if (!isNaN(firstFour)) {
        year = firstFour
        tournament = tournament.slice(5)
    }
    let newTournament = {
        "name": tournament,
        "format": "",
        "year": year
    }
    tourneys.push(newTournament)
}
const uniqueTourneys = _.uniqBy(tourneys, (tourney) => {
    return tourney.name + tourney.year
})
let tourneyJSON = JSON.stringify(uniqueTourneys)
fs.writeFile(`data/tourneys.json`, tourneyJSON, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved.");
});

