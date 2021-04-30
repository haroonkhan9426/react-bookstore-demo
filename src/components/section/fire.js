import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCuXxUnFk72ci3t7Jxe7NCkiVNtBLwsEa4",
    authDomain: "book-store-d1797.firebaseapp.com",
    databaseURL: "https://book-store-d1797-default-rtdb.firebaseio.com",
    projectId: "book-store-d1797",
    storageBucket: "book-store-d1797.appspot.com",
    messagingSenderId: "99028792514",
    appId: "1:99028792514:web:de667d0e537f794493375b"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

    
