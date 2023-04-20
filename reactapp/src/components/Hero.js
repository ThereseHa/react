import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import heroImage from '../assets/images/pexels-lucie-liz-3165335(1).jpg'

function Hero() {
    return (
        <div className="hero-section">
            <img src={heroImage} alt="Gaming controller" />
            <div className="hero-content">
                <h1>Don't know what to play?</h1>
                <p>
                    We got you covered. We will randomize free games waiting for
                    you to play!
                </p>
                <button>Show me to the games!</button>
            </div>
        </div>
    )
}

export default Hero
