import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

type formData = {
  [key: string]: string;
};

export const insertData = async (data: formData) => {
  try {
    const response = await addDoc(collection(db, "forms"), {
      name: data.full_name,
      email: data.email,
      country: data.country_of_origin,
      birth: data.birth_date,
    });
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};
