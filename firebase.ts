import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAdbju47giSRJao5F7hauYcjgNaM1BeJdY",
  authDomain: "dropbox-clone-dffd9.firebaseapp.com",
  projectId: "dropbox-clone-dffd9",
  storageBucket: "dropbox-clone-dffd9.appspot.com",
  messagingSenderId: "592568576506",
  appId: "1:592568576506:web:b5fb39b824393f47481c43",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
