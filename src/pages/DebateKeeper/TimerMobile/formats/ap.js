export const AP = {
    title: 'AP',
    longTitle: 'Asian Parliamentary',
    hasPrep: true,
    periods: [
        {
            name: 'Preparation time',
            timeLength: 1800,
            bellAt: [0],
            bottomTexts: '30 minutes allowed; bell at 00:00',
            hasPOI: false
        },
        {
            name: 'Prime Minister',
            timeLength: 420,
            bellAt: [60, 360, 420],
            bottomTexts: '7 minutes long; bells at 01:00, 06:00, 07:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: 'Leader of the Opposition',
            timeLength: 420,
            bellAt: [60, 360, 420],
            bottomTexts: '7 minutes long; bells at 01:00, 06:00, 07:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: 'Deputy Prime Minister',
            timeLength: 420,
            bellAt: [60, 360, 420],
            bottomTexts: '7 minutes long; bells at 01:00, 06:00, 07:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: 'Deputy Leader of the Opposition',
            timeLength: 420,
            bellAt: [60, 360, 420],
            bottomTexts: '7 minutes long; bells at 01:00, 06:00, 07:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: 'Government Whip',
            timeLength: 420,
            bellAt: [60, 360, 420],
            bottomTexts: '7 minutes long; bells at 01:00, 06:00, 07:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: 'Opposition Whip',
            timeLength: 420,
            bellAt: [60, 360, 420],
            bottomTexts: '7 minutes long; bells at 01:00, 06:00, 07:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: 'Opposition Reply',
            timeLength: 240,
            bellAt: [180, 240],
            bottomTexts: '4 minutes long; bells at 03:00, 04:00 and every 15s after elapsing',
            hasPOI: false
        },
        {
            name: 'Government Reply',
            timeLength: 240,
            bellAt: [180, 240],
            bottomTexts: '4 minutes long; bells at 03:00, 04:00 and every 15s after elapsing',
            hasPOI: false
        },
    ]
}
