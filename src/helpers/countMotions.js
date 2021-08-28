const motionsFromDatabase = require('./data/motionsFromDatabase.json')
let eng = 0, vn = 0;
motionsFromDatabase.forEach(motion => {
    if (motion.language == "English") {
        eng++;
    }
    else {
        vn++;
    }
})
console.log(`Number of English motions: ${eng}`)
console.log(`Number of Vietnamese motions: ${vn}`)