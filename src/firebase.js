import firebase from 'firebase';

const config = {
    apiKey: process.env.API_KEY,
    authDomain: "first-flight-cc.firebaseapp.com",
    databaseURL: "https://first-flight-cc.firebaseio.com",
    projectId: "first-flight-cc",
    storageBucket: "first-flight-cc.appspot.com",
    messagingSenderId: "494267270548"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();