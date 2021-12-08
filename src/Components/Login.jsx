/* import {useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase'
import { setUserProperties } from '@firebase/analytics';

const Login = () => {
    const [email, setEMail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmail = (e) => {
        setEMail(e.target.value)
    } 

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    
    const handleRegister = (e) => {
        e.preventDefault()
        if (password.length > 6) {
    
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
        
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
    
            const errorCode = error.code;
            const errorMessage = error.message;
    
    
      });
    } else {
        console.log("Pass incompleto")
    }
    }

    return (
        <div>
            <form>
                <input onChange={handleEmail} type="email"/>
                <input onChange={handlePassword} type="password"/>
                <button onClick={handleRegister}>Registrer</button>
            </form>
        </div>
    )
}

export default Login */