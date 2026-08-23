import React from 'react';
import { Building2, Heart, Mic2, Target, TrendingUp } from 'lucide-react';

const MISSION_POINTS = [
  {
    label: 'Why Voice AI',
    icon: Mic2,
    text: 'Voice AI interests me because it combines real-time engineering with messy human behavior: interruption, ambiguity, timing, tool use, and state. I want to learn what it takes to make these systems hold up beyond the happy path.'
  },
  {
    label: 'How I Want to Grow',
    icon: TrendingUp,
    text: 'Take ownership of increasingly difficult problems, strengthen my DSA and core CS foundations, and learn from both structured engineering teams and fast-moving startups.'
  },
  {
    label: 'The Long Game',
    icon: Heart,
    text: 'Become a high-ownership engineer who can carry a problem from ambiguity to a useful product, build things that genuinely help people, and create a meaningful life with room for family and curiosity.'
  }
];

const MissionHUD: React.FC = () => {
  return (
    <div className="p-4 bg-slate-100/60 dark:bg-black/40 border border-cyber-darkPurple/20 dark:border-cyber-purple/30 rounded-xl mt-4 max-w-2xl shadow-inner">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-cyber-darkPurple/10 dark:bg-cyber-purple/20 rounded-xl">
          <Target aria-hidden="true" className="text-cyber-darkPurple dark:text-cyber-purple" size={24} />
        </div>
        <div>
          <h2 className="text-lg font-bold tracking-tight text-cyber-darkPurple dark:text-cyber-purple shimmer uppercase">Mission Directive</h2>
          <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-white/50 tracking-wider">Where I am trying to go, and why</p>
        </div>
      </div>

      <div className="space-y-5">
        <p className="border-l-2 border-cyan-500 dark:border-cyber-cyan pl-4 text-xs leading-relaxed text-slate-700 dark:text-white/80">
          I am early in my career and looking for an AI engineering role, preferably in Voice AI, where I can work on real product problems, learn from strong engineers, and develop sharper engineering judgment.
        </p>

        <div className="space-y-3">
          {MISSION_POINTS.map(({ label, icon: Icon, text }) => (
            <div key={label} className="flex items-start gap-3 rounded-lg border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5 p-3">
              <div className="shrink-0 rounded-lg bg-cyber-darkPurple/10 dark:bg-cyber-purple/15 p-2">
                <Icon size={15} aria-hidden="true" className="text-cyber-darkPurple dark:text-cyber-purple" />
              </div>
              <div className="min-w-0 space-y-1">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-white">{label}</h3>
                <p className="text-[11px] leading-relaxed text-slate-600 dark:text-white/60">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-white/50 font-medium uppercase tracking-wider">
          <Building2 size={14} aria-hidden="true" className="text-cyber-darkPurple dark:text-cyber-purple" />
          Current target
        </div>
        <div className="px-4 py-2 border border-cyber-darkPurple/50 dark:border-cyber-purple/50 bg-cyber-darkPurple/5 dark:bg-cyber-purple/10 text-[10px] font-bold tracking-widest text-cyber-darkPurple dark:text-cyber-purple rounded-full text-center shadow-sm">
          VOICE AI / APPLIED AI ENGINEERING
        </div>
      </div>
    </div>
  );
};

export default MissionHUD;
