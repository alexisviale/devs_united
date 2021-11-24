
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAFvgCbde2pyPtyp48uaN0bSh97rR4lIPE",
  authDomain: "devs-united-f8fe5.firebaseapp.com",
  projectId: "devs-united-f8fe5",
  storageBucket: "devs-united-f8fe5.appspot.com",
  messagingSenderId: "683682274530",
  appId: "1:683682274530:web:958028b895d43af8f452bb",
  measurementId: "G-S8VKZMF2Z1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);