export const BP5min = {
    title: 'BP (5 minutes)',
    longTitle: 'BP (5 minutes)',
    hasPrep: true,
    periods: [
        {
            name: 'Preparation time',
            timeLength: 900, 
            bellAt: [0],
            bottomTexts: '15 minutes allowed; bell at 00:00',
            hasPOI: false
        },
        {
            name: 'Prime Minister',
            timeLength: 300,
            bellAt: [60, 240, 300],
            bottomTexts: '5 minutes long; bells at 01:00, 04:00, 05:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: 'Leader of the Opposition',
            timeLength: 300,
            bellAt: [60, 240, 300],
            bottomTexts: '5 minutes long; bells at 01:00, 04:00, 05:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: 'Deputy Prime Minister',
            timeLength: 300,
            bellAt: [60, 240, 300],
            bottomTexts: '5 minutes long; bells at 01:00, 04:00, 05:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: 'Deputy Leader of the Opposition',
            timeLength: 300,
            bellAt: [60, 240, 300],
            bottomTexts: '5 minutes long; bells at 01:00, 04:00, 05:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: 'Member of the Government',
            timeLength: 300,
            bellAt: [60, 240, 300],
            bottomTexts: '5 minutes long; bells at 01:00, 04:00, 05:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: 'Member of the Opposition',
            timeLength: 300,
            bellAt: [60, 240, 300],
            bottomTexts: '5 minutes long; bells at 01:00, 04:00, 05:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: 'Government Whip',
            timeLength: 300,
            bellAt: [60, 240, 300],
            bottomTexts: '5 minutes long; bells at 01:00, 04:00, 05:00 and every 15s after elapsing',
            hasPOI: true
        },
        {
            name: 'Opposition Whip',
            timeLength: 300,
            bellAt: [60, 240, 300],
            bottomTexts: '5 minutes long; bells at 01:00, 04:00, 05:00 and every 15s after elapsing',
            hasPOI: true
        },
    ],
}