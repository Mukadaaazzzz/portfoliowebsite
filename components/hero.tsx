"use client";


import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Tech elements for the background
const TECH_ELEMENTS = [
  { 
    content: "<div className='container'>",
    left: '5%',
    top: '15%',
    delay: 0
  },
  { 
    content: "function createPortfolio() {",
    left: '80%',
    top: '25%',
    delay: 0.3
  },
  { 
    content: "const innovation = new Ideas();",
    left: '10%',
    top: '65%',
    delay: 0.6
  },
  { 
    content: "export default Hero;",
    left: '75%',
    top: '75%',
    delay: 0.9
  },
  { 
    content: "interface Developer {",
    left: '60%',
    top: '45%',
    delay: 1.2
  },
  { 
    content: "useEffect(() => {}, []);",
    left: '25%',
    top: '35%',
    delay: 1.5
  }
];

const Hero = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight);
      
      const handleResize = () => {
        setWindowHeight(window.innerHeight);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-6 bg-white overflow-hidden">
      {/* Circuit board background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Animated binary code rain effect - Only render if windowHeight is available */}
      {windowHeight > 0 && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-xs text-blue-500 opacity-30 font-mono"
              style={{
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, windowHeight],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
            >
              {Math.random() > 0.5 ? "1" : "0"}
            </motion.div>
          ))}
        </div>
      )}

      {/* Floating tech elements with code snippets */}
      {TECH_ELEMENTS.map((element, i) => (
        <motion.div
          key={i}
          className="absolute text-xs font-mono text-gray-600 opacity-70 px-3 py-2 rounded-lg bg-gray-100/50 backdrop-blur-sm"
          style={{
            left: element.left,
            top: element.top,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: element.delay, duration: 1 }}
          whileHover={{ opacity: 1, scale: 1.05, backgroundColor: 'rgba(243, 244, 246, 0.8)' }}
        >
          {element.content}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center max-w-screen-md mx-auto">

        
        {/* Headline */}
        <motion.h1
          className="mt-8 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Mukadaz Taofeeq
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Full Stack Developer | AI & ML Engineer <br />    
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="/Mukadaz-Software Developer.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;