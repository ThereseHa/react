/*import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
    return (
        <div className="App">
            <Router>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App*/

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Hero from './components/Hero.js'

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Hero />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
