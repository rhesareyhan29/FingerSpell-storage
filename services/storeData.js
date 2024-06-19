const admin = require("firebase-admin");
const serviceAccount = require ("../creds.json");

const { default: firebase } = require("firebase/compat/app");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fingerspell-storage-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "gs://fingerspell-storage.appspot.com"
});

const bucket = admin.storage().bucket();
const db = admin.firestore();

module.exports = { admin, bucket, db};