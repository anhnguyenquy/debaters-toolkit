export const WSDC = {
    title: 'WSDC',
    longTitle: 'WSDC',
    hasPrep: true,
    periods: [
        {
            name: 'Preparation time',
            timeLength: 3600,
            bellAt: [0],
            bottomTexts: '60 minutes allowed; bell at 00:00',
            hasPOI: false
        },
        {
            name: '1st Affirmative',
            timeLength: 480,
            bellAt: [60, 420, 480],
            bottomTexts: '8 minutes long; bells at 01:00, 07:00, 08:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: '1st Negative',
            timeLength: 480,
            bellAt: [60, 420, 480],
            bottomTexts: '8 minutes long; bells at 01:00, 07:00, 08:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: '2nd Affirmative',
            timeLength: 480,
            bellAt: [60, 420, 480],
            bottomTexts: '8 minutes long; bells at 01:00, 07:00, 08:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: '2nd Negative',
            timeLength: 480,
            bellAt: [60, 420, 480],
            bottomTexts: '8 minutes long; bells at 01:00, 07:00, 08:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: '3rd Affirmative',
            timeLength: 480,
            bellAt: [60, 420, 480],
            bottomTexts: '8 minutes long; bells at 01:00, 07:00, 08:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: '3rd Negative',
            timeLength: 480,
            bellAt: [60, 420, 480],
            bottomTexts: '8 minutes long; bells at 01:00, 07:00, 08:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: 'Negative Leader\'s Reply',
            timeLength: 240,
            bellAt: [180, 240],
            bottomTexts: '4 minutes long; bells at 03:00, 04:00 and every 15s after elapsing',
            hasPOI: false,
        },
        {
            name: 'Affirmative Leader\'s Reply',
            timeLength: 240,
            bellAt: [180, 240],
            bottomTexts: '4 minutes long; bells at 03:00, 04:00 and every 15s after elapsing',
            hasPOI: false,
        },
    ]
}
