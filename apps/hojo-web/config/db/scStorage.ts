import firebase from "@web/config/db/scFirebase";

const endPoint = (prefix: string) => firebase.storage().ref().child(prefix);

const storage = {
  put: (prefix: string, file: Blob) => endPoint(prefix).put(file),
};

export default storage;
