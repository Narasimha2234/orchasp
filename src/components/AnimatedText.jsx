import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text }) => {
  // Split the text into an array of characters
  const letters = Array.from(text);

  // Define the animation variants
  const container = {
    hidden: { opacity: 0 },
    visible:{
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren:0 },
    }
  };

  const child = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
    
      
    },
  };

  return (
    <motion.div
      style={{ display: 'flex', overflow: 'hidden' }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
