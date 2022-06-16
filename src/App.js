
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact'
import Nav from './components/Nav/Nav';
import Projects from './pages/Projects/Projects'
import Footer from './components/Footer/Footer'
import Blog from './pages/Blog/Blog'
import React, {useEffect, useState} from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";


function App() {
  const [loading , setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    },2000)
  }, [])
return (

    <>
    {
        loading ? 
        <div className='loader'>
        <PacmanLoader color={'#3B90FC'} loading={loading} size={100} />
          </div>
        :
  
    <div className="container">
      <Nav/>
    
      <Routes >
        <Route path="/" element={ <Home/>} />
        <Route path="/Contact" element={ <Contact/>} />
        <Route path="/Projects" element={ <Projects/>} />
        <Route path="/Blog" element={ <Blog/>} />
        
       

      </Routes>
      
      <Footer/>
    </div>

}
    </>
  );
  
}

export default App;
