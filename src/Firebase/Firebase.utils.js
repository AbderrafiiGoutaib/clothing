import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyC2UjxSmcT2pg3qFJPfHcJsG1nIKKb-eNw",
  authDomain: "clothing-db-4f779.firebaseapp.com",
  databaseURL: "https://clothing-db-4f779.firebaseio.com",
  projectId: "clothing-db-4f779",
  storageBucket: "clothing-db-4f779.appspot.com",
  messagingSenderId: "207999522919",
  appId: "1:207999522919:web:c76f6b65db2babad3d5cc2",
  measurementId: "G-R3RRF4SKPY",
};
firebase.initializeApp(config);
export const createUserProfilDocument = async (userAuth, additioanlData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShoot = await userRef.get();

  if (!snapShoot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additioanlData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
//export const user = auth.currentUser;
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
