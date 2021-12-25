/* eslint-disable no-undef */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js')

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'image',
  new workbox.strategies.CacheFirst() // use NetworkFirst() if a lot if things need to be loaded online
)

/* 
{
  "name": "Submit new motion(s)",
  "short_name": "Submit",
  "description": "Submit motion(s) to be added to the database",
  "url": "/new_motion",
  "icons": [
    { "src": "/icons/new-motion/36x36.png", "sizes": "36x36" },
    { "src": "/icons/new-motion/48x48.png", "sizes": "48x48" },
    { "src": "/icons/new-motion/72x72.png", "sizes": "72x72" },
    { "src": "/icons/new-motion/96x96.png", "sizes": "96x96" },
    { "src": "/icons/new-motion/144x144.png", "sizes": "144x144" },
    { "src": "/icons/new-motion/192x192.png", "sizes": "192x192" }
  ]
},
"prefer_related_applications": true,
"related_applications": [
  {
    "id": "com.debaterstookit.android",
    "platform": "chromeos_play",
    "url": "https://play.google.com/store/apps/details?id=com.debaterstoolkit.android"
  }
]
*/