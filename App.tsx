
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StatusBar from './components/StatusBar';
import Terminal from './components/Terminal';
import NeuralNetwork from './components/NeuralNetwork';
import AnimatedShaderBackground from './components/AnimatedShaderBackground';
import Dock from './components/Dock';
import { SYSTEM_DATA } from './constants';

const App: React.FC = () => {
  const [isBooted, setIsBooted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as 'light' | 'dark') || 'dark';
  });

  useEffect(() => {
    // Apply theme to body
    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Simulate boot time
    const timer = setTimeout(() => setIsBooted(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="relative h-screen w-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white overflow-hidden selection:bg-[#00F0FF33] selection:text-[#00F0FF] transition-colors duration-300">
      {/* Aurora Shader Background */}
      <AnimatedShaderBackground />

      {/* Mesh Gradients */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-to-bl from-[#00F0FF08] to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-gradient-to-tr from-[#BC13FE08] to-transparent pointer-events-none z-0" />
      
      {/* Neural Network Visualization (Subtle Layer) */}
      <div className="absolute inset-0 z-[1] opacity-20 pointer-events-none dark:opacity-20 opacity-40">
        <NeuralNetwork />
      </div>

      <StatusBar theme={theme} toggleTheme={toggleTheme} />

      <main className="relative z-10 h-full w-full flex flex-col items-center justify-center p-4 md:p-8 pt-20">
        <AnimatePresence>
          {!isBooted ? (
            <motion.div 
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-48 h-1 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-full bg-[#00F0FF]"
                />
              </div>
              <p className="text-xs text-[#00F0FF] animate-pulse">ESTABLISHING NEURAL LINK...</p>
            </motion.div>
          ) : (
            <motion.div 
              key="terminal"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="w-full max-w-5xl h-[75vh] glass rounded-xl overflow-hidden shadow-2xl flex flex-col animate-float"
            >
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/40">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-white/40 font-bold">
                  parth@neural-node: ~
                </div>
                <div className="w-12" />
              </div>

              {/* Terminal Content */}
              <Terminal />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Dock for Quick Navigation */}
      <Dock />

      {/* Scanline Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </div>
  );
};

export default App;
