import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Target, Activity, GraduationCap, Terminal } from 'lucide-react';
import { SYSTEM_DATA, COLORS } from '../constants';

const StatusBar: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const StatusItem = ({ icon: Icon, label, value, color, className }: any) => (
    <div className={`flex items-center gap-2 px-4 border-r border-white/10 h-full ${className || ''}`}>
      <Icon size={14} className="transition-colors" style={{ color }} />
      <span className="text-[10px] text-white/40 uppercase font-bold tracking-tight">{label}:</span>
      <span className="text-[11px] font-bold text-white/90">{value}</span>
    </div>
  );

  return (
    <motion.header 
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 h-10 border-b border-white/10 bg-[#050505]/95 z-[100] flex items-center justify-between px-2 overflow-x-auto whitespace-nowrap scrollbar-hide"
    >
      <div className="flex items-center h-full">
        <div className="flex items-center gap-2 px-4 border-r border-white/10 h-full select-none">
          <Terminal size={14} className="text-cyber-cyan" />
          <span className="text-[10px] font-black tracking-widest text-white/95 uppercase">NEURAL_NODE</span>
        </div>
        <StatusItem icon={User} label="User" value={SYSTEM_DATA.user} color={COLORS.CYAN} />
        <StatusItem icon={MapPin} label="Location" value={SYSTEM_DATA.location} color={COLORS.GREEN} className="hidden md:flex" />
        <StatusItem icon={Target} label="Focus" value={SYSTEM_DATA.focus} color={COLORS.PURPLE} />
        <StatusItem icon={GraduationCap} label="Education" value={SYSTEM_DATA.education} color={COLORS.AMBER} className="hidden md:flex" />
      </div>
      
      <div className="flex items-center gap-4 ml-auto px-4 h-full">
        <div className="flex items-center gap-2 text-[11px] font-bold text-white/60">
          <Activity size={14} className="animate-pulse text-cyber-green" />
          <span className="hidden sm:inline">ID: 0x99B2</span>
        </div>
        <div className="text-[11px] font-bold text-cyber-cyan tabular-nums min-w-[80px] text-right">
          {time}
        </div>
      </div>
    </motion.header>
  );
};

export default StatusBar;
