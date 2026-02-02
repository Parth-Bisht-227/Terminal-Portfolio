
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Flag, Plane, Cpu, BrainCircuit } from 'lucide-react';
import { SKILLS, COLORS } from '../constants';

const MissionHUD: React.FC = () => {
  return (
    <div className="p-4 bg-slate-100/60 dark:bg-black/40 border border-cyber-darkPurple/20 dark:border-cyber-purple/30 rounded-xl mt-4 max-w-2xl shadow-inner">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-cyber-darkPurple/10 dark:bg-cyber-purple/20 rounded-xl">
          <Target className="text-cyber-darkPurple dark:text-cyber-purple" size={24} />
        </div>
        <div>
          <h2 className="text-lg font-bold tracking-tight text-cyber-darkPurple dark:text-cyber-purple shimmer uppercase">Mission: Japan 2026</h2>
          <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-white/50 tracking-wider">Strategic Research Deployment</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-slate-800 dark:text-white/80 border-b border-black/5 dark:border-white/10 pb-1.5 flex items-center gap-2 uppercase tracking-widest">
            <Cpu size={14} className="text-cyan-600 dark:text-cyber-cyan" /> Learning Focus
          </h3>
          <div className="space-y-3">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-bold">
                  <span className="text-slate-600 dark:text-white/70">{skill.name}</span>
                  <span className="text-cyan-600 dark:text-cyber-cyan">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-cyan-600 to-cyber-darkPurple dark:from-cyber-cyan dark:to-cyber-purple shadow-[0_0_8px_rgba(0,240,255,0.2)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-bold text-slate-800 dark:text-white/80 border-b border-black/5 dark:border-white/10 pb-1.5 flex items-center gap-2 uppercase tracking-widest">
            <Flag size={14} className="text-cyber-darkGreen dark:text-cyber-green" /> Milestones
          </h3>
          <ul className="space-y-3">
            {[
              { label: 'GANs & Pix2Pix Implementation', status: 'OK', color: '#16a34a', darkColor: '#39FF14' },
              { label: 'Multimodal Fusion Logic', status: 'OK', color: '#16a34a', darkColor: '#39FF14' },
              { label: 'Japanese Proficiency (N5)', status: 'WAIT', color: '#d97706', darkColor: '#FFB100' },
              { label: 'Transformers Architecture', status: 'RUN', color: '#d97706', darkColor: '#FFB100' },
              { label: 'Agentic Frameworks', status: 'PEND', color: '#7c3aed', darkColor: '#BC13FE' }
            ].map((m, i) => (
              <li key={i} className="flex items-center gap-3 text-[10px] group">
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: m.color }} />
                <span className="flex-1 opacity-80 group-hover:opacity-100 transition-opacity truncate text-slate-700 dark:text-white/70 font-medium">{m.label}</span>
                <span className="font-bold px-1.5 py-0.5 border rounded-md shrink-0 tabular-nums" 
                  style={{ 
                    borderColor: m.color, 
                    color: m.color,
                    backgroundColor: `${m.color}10`
                  }}
                >
                  {m.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-white/40 font-medium italic">
          <BrainCircuit size={14} className="text-cyber-darkPurple dark:text-cyber-purple" />
          Internship Search: Japan Summer 2026.
        </div>
        <div className="px-5 py-2 border border-cyber-darkPurple/50 dark:border-cyber-purple/50 bg-cyber-darkPurple/5 dark:bg-cyber-purple/10 text-[10px] font-bold tracking-widest text-cyber-darkPurple dark:text-cyber-purple rounded-full animate-pulse flex items-center gap-2 whitespace-nowrap shadow-sm">
          <Plane size={14} /> STATUS: READY_FOR_DEPLOYMENT
        </div>
      </div>
    </div>
  );
};

export default MissionHUD;
