import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import './App.css'
import BirthDay from './components/BirthDay'

function App() {
  const [isAvailable, setIsAvailable] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isUrgent, setIsUrgent] = useState(false);
  const [showImage, setShowImage] = useState(true);
  
  // Image URL - Replace with the actual image path
  const imageUrl = "/path-to-her-image.jpg"; // Replace this with the actual image path
  
  useEffect(() => {
    const checkAvailability = () => {
      const now = new Date();
      const targetDate = new Date(now.getFullYear(), 2,4); // Month is 0-indexed, so 2 = March
      
      // If we're already past March 4th this year, set target to next year
      if (now > targetDate && now.getMonth() > 2 || (now.getMonth() === 2 && now.getDate() > 4)) {
        targetDate.setFullYear(now.getFullYear() + 1);
      }
      
      // Set the time to 12:00 AM
      targetDate.setHours(0, 0, 0, 0);
      
      // Check if current date is on or after target date
      if (now >= targetDate) {
        setIsAvailable(true);
        return true;
      }
      
      // Calculate time remaining
      const timeDiff = targetDate - now;
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      
      // Check if less than 20 hours remaining
      const totalHoursLeft = days * 24 + hours;
      setIsUrgent(totalHoursLeft < 20);
      
      setTimeRemaining({ days, hours, minutes, seconds });
      return false;
    };
    
    // Initial check
    checkAvailability();
    
    // Set up interval to check every second
    const interval = setInterval(checkAvailability, 1000);
    
    // Cleanup
    return () => clearInterval(interval);
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const numberVariants = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.1, 1], 
      transition: { duration: 0.3 } 
    }
  };
  
  const imageVariants = {
    initial: { opacity: 0, y: 20, rotateY: 0 },
    animate: { 
      opacity: 1, 
      y: 0,
      rotateY: [0, 10, -10, 0],
      transition: { 
        opacity: { duration: 0.5 }, 
        y: { duration: 0.5 },
        rotateY: { duration: 2, repeat: Infinity, repeatType: "reverse" }
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.4)",
      transition: { duration: 0.3 }
    }
  };
  
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };
  
  const backgroundBlobVariants = {
    animate: {
      scale: [1, 1.05, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };
  
  // Get the number text color based on urgency
  const getNumberColor = () => isUrgent ? "text-red-500" : "text-green-500";
  
  // Toggle image visibility
  const toggleImage = () => {
    setShowImage(prev => !prev);
  };
  
  // If not available, display countdown
  if (!isAvailable) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 p-4 relative overflow-hidden">
        {/* Animated background blobs */}
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
          style={{ top: '10%', left: '15%' }}
          variants={backgroundBlobVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"
          style={{ bottom: '15%', right: '10%' }}
          variants={backgroundBlobVariants}
          animate="animate"
          initial={{ rotate: 180 }}
        />
        
        <motion.div 
          className="bg-gray-800/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-700/50 w-full max-w-md md:max-w-lg relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-red-500 to-green-500 mb-6 text-center"
            variants={itemVariants}
          >
             Counting...
          </motion.h2>
          
         
          
          {!showImage && (
            <motion.div 
              className="mb-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full shadow-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleImage}
              >
                Show Image
              </motion.button>
            </motion.div>
          )}
          
          <motion.p 
            className="text-gray-300 text-center mb-8 font-bold"
            variants={itemVariants}
          >
            This will be available on March 4th at 12:00 AM
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-4 gap-3 mb-8"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-gray-900/80 rounded-xl p-3 text-center border border-gray-700/30"
              style={{ width: "100%", minWidth: "60px" }}
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
              variants={floatingAnimation}
              animate="animate"
            >
              <motion.div 
                className={`text-3xl font-bold ${getNumberColor()}`}
                variants={numberVariants}
                key={timeRemaining.days}
                initial="initial"
                animate="animate"
              >
                {timeRemaining.days}
              </motion.div>
              <div className="text-xs text-gray-400 mt-1">Days</div>
            </motion.div>
            <motion.div 
              className="bg-gray-900/80 rounded-xl p-3 text-center border border-gray-700/30"
              style={{ width: "100%", minWidth: "60px" }}
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
              variants={floatingAnimation}
              animate="animate"
              custom={1}
            >
              <motion.div 
                className={`text-3xl font-bold ${getNumberColor()}`}
                variants={numberVariants}
                key={timeRemaining.hours}
                initial="initial"
                animate="animate"
              >
                {timeRemaining.hours}
              </motion.div>
              <div className="text-xs text-gray-400 mt-1">Hours</div>
            </motion.div>
            <motion.div 
              className="bg-gray-900/80 rounded-xl p-3 text-center border border-gray-700/30"
              style={{ width: "100%", minWidth: "60px" }}
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
              variants={floatingAnimation}
              animate="animate"
              custom={2}
            >
              <motion.div 
                className={`text-3xl font-bold ${getNumberColor()}`}
                variants={numberVariants}
                key={timeRemaining.minutes}
                initial="initial"
                animate="animate"
              >
                {timeRemaining.minutes}
              </motion.div>
              <div className="text-xs text-gray-400 mt-1">Minutes</div>
            </motion.div>
            <motion.div 
              className="bg-gray-900/80 rounded-xl p-3 text-center border border-gray-700/30"
              style={{ width: "100%", minWidth: "60px" }}
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
              variants={floatingAnimation}
              animate="animate"
              custom={3}
            >
              <motion.div 
                className={`text-3xl font-bold ${getNumberColor()}`}
                variants={numberVariants}
                key={timeRemaining.seconds}
                initial="initial"
                animate="animate"
              >
                {timeRemaining.seconds}
              </motion.div>
              <div className="text-xs text-gray-400 mt-1">Seconds</div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-center text-white text-sm font-semibold"
            variants={itemVariants}
            whileHover={{ scale: 1.05, color: '#FFD700' }}
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 5px rgba(255,255,255,0)",
                  "0 0 10px rgba(255,215,0,0.5)",
                  "0 0 5px rgba(255,255,255,0)"
                ],
                transition: {
                  duration: 2,
                  repeat: Infinity
                }
              }}
            >
              Come back soon! Don't forget 🙂
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    );
  } else {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <BirthDay />
        </motion.div>
      </AnimatePresence>
    );
  }
}

export default App