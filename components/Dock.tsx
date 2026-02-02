
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
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110]"
    >
      <div className="flex items-center gap-2.5 p-2.5 glass rounded-[2.5rem] shadow-2xl">
        {items.map((item, idx) => (
          <motion.button
            key={item.label}
            whileHover={{ scale: 1.15, y: -8 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => sendCommand(item.cmd)}
            className="group relative w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/30 transition-all shadow-sm"
            title={item.label}
          >
            <item.icon size={20} className="dark:hidden" style={{ color: item.lightColor }} />
            <item.icon size={20} className="hidden dark:block" style={{ color: item.darkColor }} />
            
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-slate-900 text-[10px] font-bold text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 pointer-events-none whitespace-nowrap shadow-lg">
              {item.label}
            </div>
          </motion.button>
        ))}
        <div className="w-px h-8 bg-black/10 dark:bg-white/10 mx-1" />
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => sendCommand('')} 
          className="w-12 h-12 flex items-center justify-center rounded-2xl bg-cyan-600/10 dark:bg-cyber-cyan/10 border border-cyan-600/20 dark:border-cyber-cyan/30 text-cyan-700 dark:text-cyber-cyan shadow-sm"
        >
          <TerminalIcon size={20} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Dock;
