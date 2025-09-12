import React from 'react'
import Canvas from './components/Canvas'
import details from './utili/data.js'    
function App() {
  return (
    <div className='w-full relative h-screen  mt-32 px-10'>
 
     {details[0].map((item, index) => (
             <Canvas key={index} detail={item} />
     ))}
    </div>
  )
}

export default App