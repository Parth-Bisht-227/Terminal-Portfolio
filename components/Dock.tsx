
import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Target, MessageSquare, Terminal as TerminalIcon, FileText } from 'lucide-react';
import { COLORS } from '../constants';

const Dock: React.FC = () => {
  const items = [
    { icon: User, label: 'About', cmd: 'about', lightColor: '#0891b2', darkColor: COLORS.CYAN },
    { icon: Code, label: 'Projects', cmd: 'projects', lightColor: '#16a34a', darkColor: COLORS.GREEN },
    { icon: Target, label: 'Mission', cmd: 'mission', lightColor: '#7c3aed', darkColor: COLORS.PURPLE },
    { icon: FileText, label: 'Resume', cmd: 'resume', lightColor: '#d97706', darkColor: COLORS.AMBER },
    { icon: MessageSquare, label: 'Contact', cmd: 'contact', lightColor: '#475569', darkColor: '#94a3b8' },
  ];

  const sendCommand = (command: string) => {
    window.dispatchEvent(new CustomEvent('terminal-command', { detail: { command } }));
  };

  return (
    <motion.div 
      initial={{ y: 100, x: '-50%' }}
      animate={{ y: 0, x: '-50%' }}
      style={{
        position: 'fixed',
        bottom: '16px',
        left: '50%',
        zIndex: 50,
      }}
    >
      <div 
        style={{
          background: 'rgba(5, 5, 5, 0.8)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderRadius: '999px',
          padding: '8px 16px',
        }}
        className="flex items-center gap-1.5 md:gap-2.5 shadow-2xl max-w-[95vw] overflow-x-auto scrollbar-hide border border-white/10"
      >
        {items.map((item, idx) => (
          <motion.button
            key={item.label}
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => sendCommand(item.cmd)}
            className="group relative w-[40px] h-[40px] md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all shadow-sm shrink-0"
            title={item.label}
          >
            <item.icon className="w-[18px] h-[18px] md:w-5 md:h-5" style={{ color: item.darkColor }} />
            
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-slate-900 text-[10px] font-bold text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 pointer-events-none whitespace-nowrap shadow-lg">
              {item.label}
            </div>
          </motion.button>
        ))}
        <div className="w-px h-6 md:h-8 bg-white/10 mx-0.5 md:mx-1 shrink-0" />
        <motion.button
          whileHover={{ scale: 1.08, y: -4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => sendCommand('help')} 
          className="group relative w-[40px] h-[40px] md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan shadow-sm shrink-0"
          title="Help"
        >
          <TerminalIcon className="w-[18px] h-[18px] md:w-5 md:h-5" />
          
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-slate-900 text-[10px] font-bold text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 pointer-events-none whitespace-nowrap shadow-lg">
            Help
          </div>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Dock;
