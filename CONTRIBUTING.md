# Contributing to Debaters' toolkit

Looking forward to contribute to Debaters' toolkit? Thanks! Here's a step-by-step guide as to how to rebuild this project from scratch.

## Setting up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/) and click on 'Add Project'. Remember to switch off 'Enable Google Analytics for this project' after naming your project.
2. Click on the </> button in 'Project Overview' to create a new web app. Don't check 'Also set up Firebase Hosting for this app.'
3. After clicking 'Register App', you will find something like this:
```sh
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXX-XXXX_XXXXX-XXXXXXXXX",
  authDomain: "XXXX.firebaseapp.com",
  projectId: "XXXX",
  storageBucket: "XXXX.appspot.com",
  messagingSenderId: "XXXXXXXXXXXXX",
  appId: "1:XXXXXXXXXXXXX:web:XXXXXXXXXXXXXXXXXXXXXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```
Copy the values inside firebaseConfig (without quotation marks) and paste them correspondingly to the [.env.example](https://github.com/anhnguyenquy/debaters-toolkit/blob/main/.env.example) file in the root directory of the project such that the first 6 lines of [.env.example](https://github.com/anhnguyenquy/debaters-toolkit/blob/main/.env.example) looks something like this:
```sh
REACT_APP_FIREBASE_API_KEY=XXXXXXXXXXXXXXXXXX-XXXX_XXXXX-XXXXXXXXX
REACT_APP_FIREBASE_AUTH_DOMAIN=XXXX.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=XXXX
REACT_APP_FIREBASE_STORAGE_BUCKET=XXXX.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=XXXXXXXXXXXXX
REACT_APP_FIREBASE_APP_ID=1:XXXXXXXXXXXXX:web:XXXXXXXXXXXXXXXXXXXXXX
```
4. After adding a web app to your Firebase project, in the [Firebase Console](https://console.firebase.google.com/), click on 'Create database'. Select 'start in production mode' and then select a Cloud Firestore location closest to your geolocation.
5. Go to the Authentication tab in the [Firebase Console](https://console.firebase.google.com/) and click on 'Get started'. Click on 'Email/Password' and enable it. Don't enable 'Email link (passwordless sign-in)'.
6. In the 'Users' section in 'Authentication', click on 'Add user'. Provide an email and password for this user, which will be used as the admin account. Copy the User UID afterwards and paste it into 'REACT_APP_ADMIN_UID' inside [.env.example](https://github.com/anhnguyenquy/debaters-toolkit/blob/main/.env.example).
7. Go to the 'Rules' section in 'Firestore Database'. Change the rules to the following:
```sh
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
  	match /requests/{requestID} {
    	allow read: if request.auth.uid == "XXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    	allow write: if true;
    }
    match /motions/{motionID} {
    	allow read: if true;
      allow write: if request.auth.uid == "XXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    }
  	match /tournaments/{tournamentID} {
    	allow read: if true;
      allow write: if request.auth.uid == "XXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    }
  }
}
```
Replace XXXXXXXXXXXXXXXXXXXXXXXXXXXX with the UID you just copied and then click on 'Publish'.
8. Go to the 'Data' section in 'Firestore Database'. Create 3 collections named 'motions', 'requests', and 'tournaments' under 'Collection ID'. When asked to create a first document, click on 'Auto ID' and then click save. Remember to delete the first document for all 3 collections.


## Setting up Google Analytics (optional)

This part is optional, so if you don't want to set up Google Analytics, delete 'REACT_APP_GA_TRACKING_ID_WEB' inside [.env.example](https://github.com/anhnguyenquy/debaters-toolkit/blob/main/.env.example).

Visit [Analytics](https://analytics.google.com/) and login with your Google account. If you have never created a Google Analytics account, click on 'Start measuring'. Otherwise, click on the settings button the bottom of the left bar and click on '+ Create Account' under the 'Admin' tab. 

Account setup:
Give the account a name e.g. 'Debaters' toolkit'. The 4 checkboxes are optional.

Property setup:
Name the new property 'Main' and select your time zone and currency. Click on 'Show advanced options' and select 'Create a Universal Analytics'. Set the 'Website URL' to a valid URL, but if you intend to host the app somewhere then enter the desired URL here. Select 'Create a Universal Analytics property only'.

About your business:
This part is optional, and you can skip it by clicking on 'Create'.

Copy the Tracking ID (something like UA-123456789-1) and paste it into 'REACT_APP_GA_TRACKING_ID_WEB' inside [.env.example](https://github.com/anhnguyenquy/debaters-toolkit/blob/main/.env.example).

## Setting up Messenger Chat (optional)

This part is optional, so if you don't want to set up Google Analytics, delete 'REACT_APP_FB_PAGE_ID' and 'REACT_APP_FB_APP_ID' inside [.env.example](https://github.com/anhnguyenquy/debaters-toolkit/blob/main/.env.example).

Follow [this tutorial](https://www.youtube.com/watch?v=8e_4KIj4jBs) to set up your Facebook page and create a new App on [Meta for Developers](https://developers.facebook.com/). Copy your Facebook page ID and the newly created app's ID and paste them into REACT_APP_FB_PAGE_ID and REACT_APP_FB_APP_ID inside [.env.example](https://github.com/anhnguyenquy/debaters-toolkit/blob/main/.env.example), correspondingly.

## Starting the development server

Open up a terminal in the root folder of the project and do the following:
```sh
cp .env.example .env
```

Follow [this guide](https://yarnpkg.com/getting-started/migration) to install yarn v3. 

You can start the development server directly by installing the dependencies using 'npm install' or 'yarn install' and then 'npm start' or 'yarn start', but this requires manual npm/yarn configuration. The recommended approach is to run the development server inside a Docker container.

Install [Docker](https://docs.docker.com/get-docker/) if you haven't and open Docker upon finishing the installation.

Then, build the Docker image:
```sh
docker build -t debaters-toolkit .
```

Run the container:
```sh
docker run --name debaters-toolkit -d -p 3000:3000 debaters-toolkit
```

Now you can open your browser and go to http://localhost:3000.

## Electron

You can also run Debaters' toolkit as an Electron application. First, switch to the 'electron' branch.
Then, to start the Electron development server:
```sh
yarn dev
```
To build the .exe installer:
```sh
yarn build
yarn electron-pack
```
You will then find the .exe installer inside the 'dist' folder.

## Android

It is also possible to build a native apk for Debaters' toolkit. First, switch to the 'android' branch.
Then, to generate native Android source code:
```sh
ionic capacitor add android
```
A new 'android' folder will be created. Open that folder with [Android Studio](https://developer.android.com/studio) and build the APK.




