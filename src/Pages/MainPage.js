import bigLogo from './biglogo.svg'
import '../CSS/MainPage.css'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
    const navigate = useNavigate()
    return (
        <div className="main-background">
            <div className="first-half">
                <img className="logo" src={bigLogo} alt="logo"/>               
            </div>
            <div className="sec-half">
                <div>
                    <h1>LOREM<br/>IPSUM DOLOR</h1>
                    <h4>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit</h4>
                    <button onClick={() => navigate("/register")}>Sign in with Google</button>
                    <h4>© 2020 Devs_United - BETA</h4>
                </div>
            </div>
        </div>
    )
}

export default MainPage;