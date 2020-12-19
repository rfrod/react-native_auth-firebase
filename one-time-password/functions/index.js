const admin = require('firebase-admin');
const functions = require('firebase-functions');
const create_user = require('./create_user');
const serviceAccount = require('./service_account.json');
const requestOneTimePassword = require('./request_one_time_password');
const verifyOneTimePassword = require('./verify_one_time_password');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://one-time-password-test-37960-default-rtdb.firebaseio.com"
});

exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
});

exports.create_user = functions.https.onRequest(create_user);
exports.request_one_time_password = functions.https.onRequest(requestOneTimePassword);
exports.verify_one_time_password = functions.https.onRequest(verifyOneTimePassword);
