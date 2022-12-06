import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAAyXj4GIOIDL49dcY_55VCaS8zwf_6KgA",
    authDomain: "todocrud-30d2c.firebaseapp.com",
    projectId: "todocrud-30d2c",
    storageBucket: "todocrud-30d2c.appspot.com",
    messagingSenderId: "367786168115",
    appId: "1:367786168115:web:e6c51f7f8084fcae81b846"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

