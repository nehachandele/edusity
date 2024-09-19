import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/Hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/About/About'
import Campus from './components/compus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/videoPlayer/VideoPlayer'

function App() {
  const [playState,setPlayState]=useState(false)
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer' />
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallery' title='Campus Photos' />
      <Campus/>
      <Title subTitle='Testimonials' title='What Student Says' />
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get in Touch' />
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
