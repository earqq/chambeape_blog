import firebase from "firebase/app";
import 'firebase/firestore'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyCTLO80ZsyLplwekTq4cj2zmeBR_mMa7RA",
    authDomain: "easyjobs-7eb74.firebaseapp.com",
    databaseURL: "https://easyjobs-7eb74.firebaseio.com",
    projectId: "easyjobs-7eb74",
    storageBucket: "easyjobs-7eb74.appspot.com",
    messagingSenderId: "419928017364",
    appId: "1:419928017364:web:237a96c5902a528f90ae41"
  }
  firebase.initializeApp(firebaseConfig);
}
export const firestore = firebase.firestore();

// export const storage = firebase.storage().ref('/articles')
