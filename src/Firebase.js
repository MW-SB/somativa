import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCkqxQVUgxYNe8xy2oKcjfFYXONLV37Dds",
    authDomain: "atividade-somativa.firebaseapp.com",
    projectId: "atividade-somativa",
    storageBucket: "atividade-somativa.appspot.com",
    messagingSenderId: "375460516156",
    appId: "1:375460516156:web:3c57fd7cdf9b5503d78e39",
    measurementId: "G-TK0S71GKEZ"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
