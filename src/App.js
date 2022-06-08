
import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact'
import Nav from './components/Nav/Nav';
import Projects from './pages/Projects/Projects'


function App() {
  return (
    <>
    <div className="container">
      <Nav/>
      <Routes >
        <Route path="/" element={ <Home/>} />
        <Route path="/Contact" element={ <Contact/>} />
        <Route path="/Projects" element={ <Projects/>} />

      </Routes>
      
    </div>
    </>
  );
}

export default App;
