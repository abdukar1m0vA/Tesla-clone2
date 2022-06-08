import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCYz6SRJbnq_PLaHuoNSd_Id-TLoXU3S-c",
    authDomain: "tesla-clone-0506.firebaseapp.com",
    projectId: "tesla-clone-0506",
    storageBucket: "tesla-clone-0506.appspot.com",
    messagingSenderId: "185646588021",
    appId: "1:185646588021:web:7eacd0c69da31198a1183c",
    measurementId: "G-7B61QHZDN6"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;