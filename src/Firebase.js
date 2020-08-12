import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCPFpknYVtaJ4TurGw4E2PwCGWacadda6c",
    authDomain: "slack-clone-9dd9c.firebaseapp.com",
    databaseURL: "https://slack-clone-9dd9c.firebaseio.com",
    projectId: "slack-clone-9dd9c",
    storageBucket: "slack-clone-9dd9c.appspot.com",
    messagingSenderId: "856393852510",
    appId: "1:856393852510:web:4725d3daf1581e1ed5b6cf",
    measurementId: "G-B5K3Q3W6L5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider};
export default db;