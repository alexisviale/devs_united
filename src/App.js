/* import Login from './Login' */
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from '../src/Pages/MainPage'
import Register from '../src/Pages/Register'
import ErrorPage from '../src/Pages/ErrorPage'


function App() {

  
  return (
  
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="*" element={<ErrorPage />}/>
    </Routes>
  </Router>
  
  )
}

export default App;
