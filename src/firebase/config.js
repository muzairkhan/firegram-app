import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyC7ECMqJpnMDrqXzK1sFQkTzpAp_Q4gd4E",
  authDomain: "new-firegram.firebaseapp.com",
  databaseURL: "https://new-firegram.firebaseio.com",
  projectId: "new-firegram",
  storageBucket: "new-firegram.appspot.com",
  messagingSenderId: "776462189611",
  appId: "1:776462189611:web:a1219c93c75d58bfe4166e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp};