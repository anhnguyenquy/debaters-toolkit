export const CP_PMRE = {
    title: 'CP (PMRE)',
    longTitle: 'CP (PMRE)',
    hasPrep: false,
    periods: [
        {
            name: "Prime Minister's Constructive",
            timeLength: 360,
            bellAt: [30, 330, 360],
            bottomTexts: '6 minutes long; bells at 00:30, 05:30, 06:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: "Member of the Opposition",
            timeLength: 420,
            bellAt: [60, 360, 420],
            bottomTexts: '7 minutes long; bells at 01:00, 06:00, 07:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: "Minister of the Crown",
            timeLength: 420,
            bellAt: [60, 360, 420],
            bottomTexts: '7 minutes long; bells at 01:00, 06:00, 07:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: "Leader of the Opposition",
            timeLength: 600,
            bellAt: [60, 360, 420, 540, 600],
            bottomTexts: '10 minutes long; bells at 01:00, 06:00, 07:00, 09:00, 10:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: "Prime Minister's Rebuttal",
            timeLength: 240,
            bellAt: [180, 240],
            bottomTexts: '4 minutes long; bells at 03:00, 04:00 and every 15s after elapsing',
            hasPOI: true
        }
    ],
}