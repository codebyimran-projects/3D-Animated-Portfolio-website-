import React, { useState } from 'react'
import Canvas from './components/Canvas'

import Navbar from './components/Navbar.jsx';
import LocomotiveScroll from 'locomotive-scroll';
import Hero from './components/Hero.jsx';
import GiantBrandText from './components/GiantBrandText.jsx';


function App() {
  const [showCanvas, setShowCanvas] = useState(false);
useState(() => {
  const scroll = new LocomotiveScroll();


}, []);
  return (
    <div className='w-full relative h-screen  mt-32 px-10'>

  
      <Navbar />
      <Hero />
      <GiantBrandText />
    </div>
  )
}

export default App