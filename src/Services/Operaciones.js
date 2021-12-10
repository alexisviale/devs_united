import { db } from './firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'

// get collection data

export const getData = async (coll) => {
    
    const collectionRef = collection(db, coll);
    const snapData = await getDocs(collectionRef);
    return snapData;

}

// add data to collection

export const addData = async (coll, data) => {
    try {
        const docRef = await addDoc(collection(db, coll), data);
    } catch (e) {
        console.error("Error adding document to collection", e)
    }
}

