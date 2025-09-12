import React, { use } from 'react';
import { useEffect, useRef, useState } from 'react'
import images from '../utili/images.js';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
function Canvas({ detail }) {
  const { startIndex, numImages, duration, size, top, left, zIndex } = detail;
  const canvasRef = useRef();
  const [index, setIndex] = useState(startIndex);

  // useGSAP hook runs the animation logic when dependencies change
  useGSAP(() => {
    // animObj holds the current frame index as 'value'
    const animObj = { value: startIndex };
    // Animate 'value' from startIndex to the last image index
    gsap.to(animObj, {
      value: startIndex + numImages - 1, // go through all images
      duration: duration, // total animation duration
      ease: "linear", // linear timing for smooth frame change
      repeat: -1, // loop infinitely
      onUpdate: () => {
        // Update React state with the current frame index (rounded)
        setIndex({ value: Math.round(animObj.value) });
      }
    });
  }, [startIndex, numImages, duration]); // re-run animation if these change

  // useEffect hook to draw the current image frame on the canvas whenever 'index' or 'size' changes
  useEffect(() => {
    const scale = window.devicePixelRatio; // Get device pixel ratio for sharp rendering
    const canvas = canvasRef.current; // Reference to the canvas DOM element
    const context = canvas.getContext('2d'); // Get 2D drawing context
    const img = new window.Image(); // Create a new image object
    img.src = images[index.value]; // Set image source to the current frame
    img.onload = () => { 
      // Set canvas size for high-DPI screens
      canvas.width = size * scale;
      canvas.height = size * scale;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      // Draw the image on the canvas, scaled appropriately
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }, [index, size]); // Re-run effect when 'index' or 'size' changes

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: `${top}%`,
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        zIndex: zIndex
      }}
    />
  );
}

export default Canvas;