import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// here i want to import the seed file only once
import { seedDatabase } from '../seed';

const firebaseConfig = {
    apiKey: "AIzaSyBefFhSoFS1s9inWdXI_TjaWbosfG9brzo",
    authDomain: "bereal-6e5d2.firebaseapp.com",
    projectId: "bereal-6e5d2",
    storageBucket: "bereal-6e5d2.appspot.com",
    messagingSenderId: "427848016133",
    appId: "1:427848016133:web:bb46a0c70bd50409a8976c"
};

const firebase = Firebase.initializeApp(firebaseConfig);
const { FieldValue } = Firebase.firestore;


// here is where i want to call the seed file (Only Once!!)
seedDatabase(firebase);   
// i wanted to do this only once so commented it after calling it once

export { firebase, FieldValue };