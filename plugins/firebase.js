import firebase from "firebase/app";
import 'firebase/firestore'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyCVfw6R28MpwLtCFeIVzh0wIQh6ANT7Ft4',
    authDomain: 'easybillblog.firebaseapp.com',
    databaseURL: 'https://easybillblog.firebaseio.com',
    projectId: 'easybillblog',
    storageBucket: 'easybillblog.appspot.com',
    messagingSenderId: '402268263010',
    appId: '1:402268263010:web:362b7d88ece56221'
  }
  firebase.initializeApp(firebaseConfig);
}
export const firestore = firebase.firestore();

// export const storage = firebase.storage().ref('/articles')
