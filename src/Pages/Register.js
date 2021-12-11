import { useNavigate } from "react-router";
import bigLogo from './biglogo.svg'
const Register = () => {

    const navigate = useNavigate()

return (
<div className="main-background">
    <div className="first-half">
        <img className="logo" src={bigLogo} alt="logo"/>               
    </div>
    <div className="sec-half">
        <div>
            <h1>WELCOME</h1>
            <h1><span>NAME</span></h1>
            <input type="text" placeholder="type your username" />
            <h4>Select you favorite color</h4>
            <button onClick={() => navigate("/")}>Back</button>
            <button onClick={() => navigate("/feed")}>Continue</button>
        </div>
    </div>
</div>)
}

export default Register;