
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Target, Activity, ShieldCheck, Sun, Moon, Terminal } from 'lucide-react';
import { SYSTEM_DATA, COLORS } from '../constants';

interface StatusBarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const StatusBar: React.FC<StatusBarProps> = ({ theme, toggleTheme }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const StatusItem = ({ icon: Icon, label, value, lightColor, darkColor, className }: any) => (
    <div className={`flex items-center gap-2 px-4 border-r border-black/5 dark:border-white/10 h-full ${className || ''}`}>
      <Icon size={14} className="transition-colors" style={{ color: theme === 'dark' ? darkColor : lightColor }} />
      <span className="text-[10px] text-slate-500 dark:text-white/40 uppercase font-bold tracking-tight">{label}:</span>
      <span className="text-[11px] font-bold text-slate-900 dark:text-white/90">{value}</span>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 h-10 border-b border-black/5 dark:border-white/10 glass z-[100] flex items-center justify-between px-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
      <div className="flex items-center h-full">
        <div className="flex items-center gap-2 px-4 border-r border-black/5 dark:border-white/10 h-full select-none">
          <Terminal size={14} className="text-cyan-600 dark:text-cyber-cyan" />
          <span className="text-[10px] font-black tracking-widest text-slate-800 dark:text-white/95 uppercase">NEURAL_NODE</span>
        </div>
        <StatusItem icon={User} label="User" value={SYSTEM_DATA.user} lightColor="#0891b2" darkColor={COLORS.CYAN} />
        <StatusItem icon={MapPin} label="Location" value={SYSTEM_DATA.location} lightColor="#16a34a" darkColor={COLORS.GREEN} className="hidden md:flex" />
        <StatusItem icon={Target} label="Target" value={SYSTEM_DATA.target} lightColor="#7c3aed" darkColor={COLORS.PURPLE} />
        <StatusItem icon={ShieldCheck} label="Health" value={SYSTEM_DATA.health} lightColor="#d97706" darkColor={COLORS.AMBER} className="hidden md:flex" />
      </div>
      
      <div className="flex items-center gap-4 ml-auto px-4 h-full">
        <button 
          onClick={toggleTheme}
          className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all text-slate-500 dark:text-white/40"
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
        </button>
        <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 dark:text-white/60">
          <Activity size={14} className="animate-pulse text-emerald-600 dark:text-cyber-green" />
          <span className="hidden sm:inline">ID: 0x99B2</span>
        </div>
        <div className="text-[11px] font-bold text-cyan-700 dark:text-cyber-cyan tabular-nums min-w-[80px] text-right">
          {time}
        </div>
      </div>
    </header>
  );
};

export default StatusBar;
