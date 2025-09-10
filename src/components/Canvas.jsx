import React, { use } from 'react';
import { useEffect, useRef ,useState } from 'react'
import images from '../utili/images.js';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
function Canvas() {
  const canvasRef = useRef();
  const [index, setIndex] = useState({value:0});

useGSAP(() => {

  gsap.to(index, {
    value: 149,
    duration: 3,
    ease: "linear",
    repeat: -1,
    onUpdate: () => {
      setIndex({ value: Math.round(index.value) });
    }
  });
});

useEffect(() => {
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');
  const img = new Image();
  img.src = images[index.value];
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
   
    context.drawImage(img, 0, 0);
  };
}, [index]);

  return (
    <canvas id='canvas' ref={canvasRef} className='w-[18rem] h-[18rem]' ></canvas>
  )
}

export default Canvas