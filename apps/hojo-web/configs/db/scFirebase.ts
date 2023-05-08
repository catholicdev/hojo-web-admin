import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

import { FirebaseProdConfig, FirebaseStagingConfig } from "../firebase";

let firebaseConfig = FirebaseStagingConfig;

const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;
if (environment == "production") firebaseConfig = FirebaseProdConfig;

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
