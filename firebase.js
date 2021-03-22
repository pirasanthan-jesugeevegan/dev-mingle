import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCqDlYZkkXtMois8TlGVT2uMHTeCIbNfKc',
  authDomain: 'dev-mingle-build.firebaseapp.com',
  projectId: 'dev-mingle-build',
  storageBucket: 'dev-mingle-build.appspot.com',
  messagingSenderId: '486273301055',
  appId: '1:486273301055:web:f2d277343d126ae8c1168a',
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
