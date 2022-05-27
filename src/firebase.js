import { initializeApp } from "firebase/app"
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";

import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    getDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBmnlgNRMPXub8N6sqUDCOJh5OalHY5g1U",
    authDomain: "mibal-89ea5.firebaseapp.com",
    projectId: "mibal-89ea5",
    storageBucket: "mibal-89ea5.appspot.com",
    messagingSenderId: "448391525478",
    appId: "1:448391525478:web:13f6251c3baab9e8d9e9a7",
    measurementId: "G-2V56T8QBD2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = GoogleAuthProvider();

const logInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, 'users'), where('uid', '==', user.uid));
        const docs = await getDocs(q);

        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: 'google',
                email: user.email,
            })
        }
    }
    catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

export {
    app,
    auth,
    db,
    logInWithEmailAndPassword,
    logInWithGoogle,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
}