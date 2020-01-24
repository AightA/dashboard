import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


// TODO Move these config variables to env variables
const firebaseConfig = {
    apiKey: "AIzaSyCrbiEFSrgoxlMfuBn-rXtBF3KSQu2uOEE",
    authDomain: "silentauction-56a6f.firebaseapp.com",
    databaseURL: "https://silentauction-56a6f.firebaseio.com",
    projectId: "silentauction-56a6f",
    storageBucket: "silentauction-56a6f.appspot.com",
    messagingSenderId: "505744443992",
    appId: "1:505744443992:web:8bc51acd2d106c1125182d"
};



firebase.initializeApp(firebaseConfig);


export default firebase;