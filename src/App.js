
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact'
import Nav from './components/Nav/Nav';
import Projects from './pages/Projects/Projects'
import Footer from './components/Footer/Footer'
import Blog from './pages/Blog/Blog'
import React, {useState} from 'react'
const APp = () => {
  const [darkMode, setDarkMode] = useState(false);

return (
  <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className='container'>
          <span style={{ color: darkMode ? 'grey': 'yellow'}}>Light</span>
          <div className='switch-checkbox'>
              <label className='switch'>
              <input type='checkbox' onChange={() => setDarkMode(!darkMode)} />
              <span className='round slider'></span>
              </label>
          </div>
          <span style={{ color: darkMode ? '#c69dfd' : 'grey'}}>Dark</span>
      </div>
      <h2>{ darkMode? 'Dark' : 'Light'} Mode</h2>
  </div>
)
}

function App() {
  
  return (
    <>
    <body>
      
    
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
    
      
    </body>
    </>
  );
}

export default App;
