import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/AboutPage'
import Project from './pages/ProjectsPage'
import Contact from './pages/ContactPage'
import Preload from './components/Preload'
import { useEffect, useState } from 'react'

const App = () => {
  const [load, updateLoad] = useState(true);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });

      window.addEventListener('mousemove', mouseMove);
    }
    return () => window.removeEventListener('mousemove', mouseMove)
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='App'>
      <motion.div
        className='cursor'
        variants={variants}
        animate="default"
      />

      <Router>
        <Preload load = {load}/>
        <div className='App' id={load ? 'no-scroll' : 'scroll'}>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/projects' element={<Project />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
