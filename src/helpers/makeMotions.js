const fs = require('fs');
const motionDataRaw = require('./data/motionDataRaw.json');
const endWithDot = (str) => {
    if (str.slice(-1) == ".") {
        return (str)
    }
    else {
        return (str + ".")
    }
}
let motions = [];
motionDataRaw.forEach(async (motion) => {
    let date = new Date(motion.Date);
    let year = date.getFullYear().toString();
    if (year == "NaN") {
        year = ""
    }
    let tournament = motion.Tournament;
    let lastFour = tournament.slice(-4)
    if (!isNaN(lastFour)) {
        year = tournament.slice(-4)
        tournament = tournament.slice(0, -5)
    }
    let id = ""
    let content = endWithDot(motion.Motion)
    let infoSlide = ''
    if (motion.InfoSlide != undefined) {
        infoSlide = endWithDot(motion.InfoSlide)
    }
    const curMot = { tournament: tournament, year: year, format: "", content: content, infoSlide: infoSlide, division: '', language: 'English', link: '', round: motion.Round, topic: {}, tournamentID: id }
    motions.push(curMot)
})
let motionJSON = JSON.stringify(motions)
fs.writeFile(`data/motions.json`, motionJSON, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved.");
});

