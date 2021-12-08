import {db} from './firebase'
import {collection, getDocs} from 'firebase/firestore'

// get collection data

export const getData = async (coll) => {
    
    const collectionRef = collection(db, coll);
    const snapData = await getDocs(collectionRef);
    return snapData;

}

