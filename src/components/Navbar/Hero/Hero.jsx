import React from 'react'
import './Hero.css'
import dark_arraow  from '../../../assets/dark-arrow.png'
function Hero() {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure Better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empoer students with the knoledge, skills, and experience needed to excel in the dynamic field of education.</p>
        <button className='btn'>Explore more <img src={dark_arraow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
