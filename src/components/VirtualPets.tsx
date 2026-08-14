import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

function Animal({ imgUrl, speed, startX, yOffset, defaultFlipped = false }: any) {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1000);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isHovered) return;

    let isActive = true;

    const roam = async () => {
      let currentX = startX;
      
      while (isActive) {
        // Keep them fully on screen: max width - 80px, min 10px
        const destX = Math.max(10, Math.min(windowWidth - 80, currentX + (Math.random() - 0.5) * 500));
        const distance = Math.abs(destX - currentX);
        const duration = distance / speed;
        
        if (distance > 10) {
          const facingRight = destX > currentX;
          
          let scaleX = facingRight ? -1 : 1;
          if (defaultFlipped) scaleX = facingRight ? 1 : -1;
          
          // Set direction before moving
          controls.set({ scaleX });
  
          // Smooth glide, NO jumping/bouncing
          await controls.start({
            x: destX,
            transition: { duration: duration, ease: "linear" }
          });
          
          currentX = destX;
        }
        
        // Pause randomly before moving again
        if (isActive) await new Promise(r => setTimeout(r, 1500 + Math.random() * 3000));
      }
    };
    
    roam();
    
    return () => { isActive = false; controls.stop(); };
  }, [controls, windowWidth, isHovered, speed, startX, defaultFlipped]);

  return (
    <motion.div
      animate={controls}
      initial={{ x: startX, y: 0 }}
      onMouseEnter={() => {
        setIsHovered(true);
        controls.stop();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className="fixed z-[100] cursor-pointer drop-shadow-md select-none"
      style={{ bottom: `${yOffset}px`, width: '56px', height: '56px' }}
      whileHover={{ scale: 1.1 }}
    >
      <img 
        src={imgUrl} 
        alt="Virtual Pet" 
        style={{ width: '100%', height: '100%', objectFit: 'contain', imageRendering: 'pixelated' }} 
        draggable="false"
      />
    </motion.div>
  );
}

export default function VirtualPets() {
  const [mounted, setMounted] = useState(false);
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    setWidth(window.innerWidth);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Capybara (Bidoof acting as Capy) */}
      <Animal 
        imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/399.gif" 
        speed={30} startX={50} yOffset={10} 
      />
      {/* Dog (Growlithe) */}
      <Animal 
        imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/58.gif" 
        speed={60} startX={250} yOffset={10} 
      />
      {/* Cat (Meowth) */}
      <Animal 
        imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/52.gif" 
        speed={45} startX={width > 600 ? width - 150 : 150} yOffset={10} 
      />
    </>
  );
}
