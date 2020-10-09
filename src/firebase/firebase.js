import firebase from 'firebase/app';
import 'firebase/auth';
//import 'firebase/database';

const app = firebase.initializeApp({
  apiKey: "AIzaSyBU-s_ybFbH-Lt_Yeahql94ZwVEv4e7FG8",
  authDomain: "amber-afternoon.firebaseapp.com",
  databaseURL: "https://amber-afternoon.firebaseio.com/"
});

export default app;