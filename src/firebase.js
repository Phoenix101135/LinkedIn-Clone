import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDZa9i4368_mFqiziYAF-UeUcWW8WX6-NA",
    authDomain: "linkedin-clone-a3f95.firebaseapp.com",
    projectId: "linkedin-clone-a3f95",
    storageBucket: "linkedin-clone-a3f95.appspot.com",
    messagingSenderId: "512697294097",
    appId: "1:512697294097:web:5d2b65790da9cba2bdc0b0"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebaseApp.auth();
  export{db,auth};