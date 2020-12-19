import firebase from 'firebase';

export default () => {
    var firebaseConfig = {
        apiKey: "AIzaSyDMxDohEjI5mIAv9x9FWPATYIPXJs-wuso",
        authDomain: "one-time-password-test-37960.firebaseapp.com",
        databaseURL: "https://one-time-password-test-37960-default-rtdb.firebaseio.com",
        projectId: "one-time-password-test-37960",
        storageBucket: "one-time-password-test-37960.appspot.com",
        messagingSenderId: "662465344928",
        appId: "1:662465344928:web:3abbbc1f0eff073baea0c5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}