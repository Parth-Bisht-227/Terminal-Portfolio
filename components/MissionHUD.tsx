import React from 'react';
import { BriefcaseBusiness, Cpu, Flag, Target } from 'lucide-react';
import { SKILLS } from '../constants';

const deliveryMetrics = [
  { label: 'Questions transformed and validated', value: '1,927' },
  { label: 'Media assets transformed and validated', value: '1,485' },
  { label: 'PTE question types delivered', value: '22' },
  { label: 'Questions in full mock test', value: '65' }
];

const MissionHUD: React.FC = () => {
  return (
    <div className="p-4 bg-slate-100/60 dark:bg-black/40 border border-cyber-darkPurple/20 dark:border-cyber-purple/30 rounded-xl mt-4 max-w-2xl shadow-inner">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-cyber-darkPurple/10 dark:bg-cyber-purple/20 rounded-xl">
          <Target className="text-cyber-darkPurple dark:text-cyber-purple" size={24} />
        </div>
        <div>
          <h2 className="text-lg font-bold tracking-tight text-cyber-darkPurple dark:text-cyber-purple shimmer uppercase">AI Engineering Profile</h2>
          <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-white/50 tracking-wider">Resume-backed snapshot</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-slate-800 dark:text-white/80 border-b border-black/5 dark:border-white/10 pb-1.5 flex items-center gap-2 uppercase tracking-widest">
            <Cpu size={14} className="text-cyan-600 dark:text-cyber-cyan" /> Technical Skills
          </h3>
          <div className="space-y-3">
            {SKILLS.map((category) => (
              <div key={category.category} className="space-y-1.5">
                <p className="text-[10px] font-bold text-slate-800 dark:text-white uppercase tracking-wider">{category.category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span key={skill} className="text-[8px] px-1.5 py-0.5 rounded border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-slate-700 dark:text-white/80">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-bold text-slate-800 dark:text-white/80 border-b border-black/5 dark:border-white/10 pb-1.5 flex items-center gap-2 uppercase tracking-widest">
            <Flag size={14} className="text-cyber-darkGreen dark:text-cyber-green" /> Current Delivery
          </h3>
          <ul className="space-y-3">
            {deliveryMetrics.map((metric) => (
              <li key={metric.label} className="flex items-center gap-3 text-[10px] group">
                <div className="w-1.5 h-1.5 rounded-full shrink-0 bg-cyber-darkGreen dark:bg-cyber-green" />
                <span className="flex-1 opacity-80 group-hover:opacity-100 transition-opacity text-slate-700 dark:text-white/70 font-medium">{metric.label}</span>
                <span className="font-bold px-1.5 py-0.5 border border-cyber-darkGreen dark:border-cyber-green text-cyber-darkGreen dark:text-cyber-green rounded-md shrink-0 tabular-nums">
                  {metric.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-white/50 font-medium">
          <BriefcaseBusiness size={14} className="text-cyber-darkPurple dark:text-cyber-purple" />
          Tsubasa Technologies Pty Ltd. (Australia) - AI Product Engineering Intern
        </div>
        <div className="px-5 py-2 border border-cyber-darkPurple/50 dark:border-cyber-purple/50 bg-cyber-darkPurple/5 dark:bg-cyber-purple/10 text-[10px] font-bold tracking-widest text-cyber-darkPurple dark:text-cyber-purple rounded-full flex items-center gap-2 whitespace-nowrap shadow-sm">
          JUN. 2026 - PRESENT
        </div>
      </div>
    </div>
  );
};

export default MissionHUD;
