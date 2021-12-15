import { db } from './firebase'
import { collection, getDocs, addDoc, onSnapshot } from 'firebase/firestore'

// get collection data

export const getData = async (coll) => {
    const collectionRef = collection(db, coll);
    const snapData = getDocs(collectionRef);
    return snapData;

}

// subscribe to data

export const getSubscription = async (coll, callback) => {
    const collectionRef = collection(db, coll)
    const unsubscribe = onSnapshot(collectionRef, callback)

    return unsubscribe;
}

// add data to collection

export const addData = async (coll, data) => {
    try {
        const docRef = await addDoc(collection(db, coll), data);
    } catch (e) {
        console.error("Error adding document to collection", e)
    }
}

