// src/components/BlurText.tsx
import React from "react";
import { motion, type Variants } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
  stagger?: number; // default 0.06
}

const parentVariants = (stagger = 0.06): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

const letterVariants: Variants = {
  hidden: { 
    y: 20, 
    opacity: 0, 
    filter: "blur(8px)" 
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const BlurText: React.FC<BlurTextProps> = ({ text, className, stagger = 0.06 }) => {
  return (
    <motion.h1
      variants={parentVariants(stagger)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {text.split("").map((char, i) => (
        <motion.span 
          key={i} 
          variants={letterVariants} 
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default BlurText;
