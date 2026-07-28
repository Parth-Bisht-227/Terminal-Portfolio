
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, Code2, Github, Linkedin, Mail, Phone, Globe2, FileText, GraduationCap, Award, Briefcase } from 'lucide-react';
import { TerminalLine } from '../types';
import { PROJECTS, SYSTEM_DATA, CONTACT, RESUME_DATA, SKILLS, EXPERIENCE } from '../constants';
import MissionHUD from './MissionHUD';

const COMMANDS = ['help', 'about', 'experience', 'projects', 'mission', 'skills', 'contact', 'resume', 'clear'];

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [historyQueue, setHistoryQueue] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const sequence = async () => {
      addOutput(<div className="mb-4"><p className="text-sm md:text-xl font-bold shimmer">{SYSTEM_DATA.headline}</p><p className="text-[10px] md:text-xs text-slate-500 dark:text-white/50">{SYSTEM_DATA.subtext}</p></div>);
      for (let i = 0; i < SYSTEM_DATA.bootSequence.length; i++) {
        await new Promise(r => setTimeout(r, 200));
        addOutput(SYSTEM_DATA.bootSequence[i], 'success');
      }
      addOutput('Type "help" to view available neural commands.', 'output');
    };
    sequence();

    const handleGuiCommand = (e: any) => {
      if (e.detail?.command !== undefined) {
        if (e.detail.command === '') {
          inputRef.current?.focus();
        } else {
          handleCommand(e.detail.command);
        }
      }
    };

    window.addEventListener('terminal-command', handleGuiCommand);
    return () => window.removeEventListener('terminal-command', handleGuiCommand);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const addOutput = (content: string | React.ReactNode, type: TerminalLine['type'] = 'output') => {
    setHistory(prev => [...prev, { id: Math.random().toString(36), content, type }]);
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.toLowerCase().trim();
    if (!trimmed) return;

    setHistoryQueue(prev => [cmd, ...prev]);
    setHistoryIndex(-1);
    addOutput(<div className="flex items-center gap-2 mt-2 font-bold"><ChevronRight size={14} className="text-cyan-600 dark:text-cyber-cyan" /> {cmd}</div>, 'command');

    switch (trimmed) {
      case 'help':
        addOutput(
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2 max-w-2xl">
            {COMMANDS.map(c => (
              <div key={c} className="flex items-center gap-2">
                <span className="text-amber-600 dark:text-cyber-amber font-bold text-[10px] uppercase">[{c}]</span>
              </div>
            ))}
          </div>
        );
        break;
      case 'about':
        addOutput(
          <div className="space-y-3 mt-2 border-l-2 border-cyber-darkPurple dark:border-cyber-purple pl-4 max-w-2xl">
            <p className="text-xs font-bold text-cyber-darkPurple dark:text-cyber-purple tracking-widest uppercase">Bio-Authentication Successful</p>
            <p className="text-xs leading-relaxed text-slate-700 dark:text-white/80">
              I am an Information Technology undergraduate at <span className="font-bold text-cyan-700 dark:text-cyber-cyan">Delhi Technological University (2023 - 2027)</span> with a CGPA of 8.54/10.
            </p>
            <p className="text-xs leading-relaxed text-slate-700 dark:text-white/80">
              I currently work as an <span className="font-bold text-cyber-darkGreen dark:text-cyber-green">AI Product Engineering Intern at Tsubasa Technologies</span>. Previously, I was an AI Engineering Intern on the founding team of a US-based stealth startup, where I built the initial functional version of a real-time Voice AI restaurant-ordering agent.
            </p>
          </div>
        );
        break;
      case 'projects':
        addOutput(
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {PROJECTS.map(p => (
              <div key={p.id} className="p-4 bg-slate-100/50 dark:bg-white/5 rounded-lg border border-black/5 dark:border-white/5 hover:border-cyan-500/50 dark:hover:border-cyber-cyan/50 transition-all cursor-pointer group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-cyan-600 dark:text-cyber-cyan uppercase tracking-widest">{p.id}</span>
                  <Code2 size={14} className="text-slate-400 dark:text-white/20 group-hover:text-cyan-600 dark:group-hover:text-cyber-cyan" />
                </div>
                <h4 className="font-bold text-sm mb-1 text-slate-900 dark:text-white">{p.name}</h4>
                <div className="space-y-1.5 mb-3">
                  {p.highlights.map((highlight) => (
                    <div key={highlight} className="flex gap-2 text-[10px] text-slate-500 dark:text-white/50 leading-snug">
                      <span className="text-cyan-600 dark:text-cyber-cyan">-</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map(t => (
                    <span key={t} className="text-[8px] px-1.5 py-0.5 rounded border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-slate-700 dark:text-white/80">{t}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {p.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="text-[10px] font-bold text-cyber-darkGreen dark:text-cyber-green hover:underline flex items-center gap-1">
                      [ {link.label.toUpperCase()} ] <ExternalLink size={10} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;
      case 'mission':
        addOutput(<MissionHUD />);
        break;
      case 'experience':
      case 'exp':
        addOutput(
          <div className="space-y-4 mt-2 border-l-2 border-cyan-600 dark:border-cyber-cyan pl-4 max-w-2xl">
            <div>
              <p className="text-xs font-bold text-cyan-600 dark:text-cyber-cyan tracking-widest uppercase">EXPERIENCE</p>
              <div className="text-[10px] text-slate-400 dark:text-white/20 select-none font-bold">----------</div>
            </div>
            <div className="space-y-4">
              {EXPERIENCE.map((experience) => (
                <div key={`${experience.company}-${experience.duration}`}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white leading-relaxed">{experience.company}</p>
                      <p className="text-[10px] italic text-slate-600 dark:text-white/70">{experience.role} | {experience.location}</p>
                    </div>
                    <span className="text-[10px] font-bold text-cyan-700 dark:text-cyber-cyan whitespace-nowrap">{experience.duration}</span>
                  </div>
                  <div className="space-y-1.5 mt-2">
                    {experience.bullets.map((bullet) => (
                      <div key={bullet} className="flex gap-2 text-[10px] text-slate-600 dark:text-white/70 leading-relaxed">
                        <span className="text-cyan-600 dark:text-cyber-cyan">-</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        break;
      case 'resume':
        addOutput(
          <div className="mt-4 space-y-6 max-w-3xl border border-black/5 dark:border-white/10 p-5 rounded-xl bg-slate-100/50 dark:bg-white/5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="text-sm font-bold text-cyber-darkPurple dark:text-cyber-purple flex items-center gap-2 uppercase tracking-widest">
                <FileText size={16} /> Professional Resume
              </h3>
              <a 
                href={RESUME_DATA.link} 
                download="Parth_Bisht_Resume.pdf"
                className="px-4 py-1.5 bg-cyan-600 dark:bg-cyber-cyan text-white dark:text-black font-bold text-[10px] rounded-lg hover:opacity-80 transition-opacity flex items-center gap-2 w-fit uppercase"
              >
                Download PDF <FileText size={12} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-[11px] font-bold text-slate-800 dark:text-white flex items-center gap-2 uppercase tracking-wider">
                  <GraduationCap size={14} className="text-cyan-600 dark:text-cyber-cyan" /> Education
                </p>
                <div className="space-y-3">
                  {RESUME_DATA.education.map((edu, i) => (
                    <div key={i} className="border-l border-black/10 dark:border-white/10 pl-3">
                      <p className="text-[10px] font-bold text-slate-900 dark:text-white">{edu.degree}</p>
                      <p className="text-[9px] text-slate-500 dark:text-white/60">{edu.institution}</p>
                      <div className="flex justify-between mt-1">
                        <span className="text-[8px] text-cyan-700 dark:text-cyber-cyan font-bold">{edu.duration}</span>
                        <span className="text-[8px] font-bold text-cyber-darkGreen dark:text-cyber-green">{edu.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[11px] font-bold text-slate-800 dark:text-white flex items-center gap-2 uppercase tracking-wider">
                  <Award size={14} className="text-amber-600 dark:text-cyber-amber" /> Achievements
                </p>
                <div className="space-y-2">
                  {RESUME_DATA.achievements.map((ach, i) => (
                    <div key={i} className="flex gap-2 text-[9px] text-slate-600 dark:text-white/70">
                      <span className="text-amber-600 dark:text-cyber-amber">-</span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-[11px] font-bold text-slate-800 dark:text-white flex items-center gap-2 uppercase tracking-wider mt-4">
                  <Briefcase size={14} className="text-cyber-darkPurple dark:text-cyber-purple" /> Leadership
                </p>
                <div className="space-y-2">
                  {RESUME_DATA.leadership.map((item) => (
                    <div key={`${item.organization}-${item.duration}`} className="text-[9px] text-slate-600 dark:text-white/70">
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                        <span className="font-bold text-slate-800 dark:text-white">{item.organization} | {item.title}</span>
                        <span className="text-cyber-darkPurple dark:text-cyber-purple font-bold whitespace-nowrap">{item.duration}</span>
                      </div>
                      <div className="flex gap-2 mt-1">
                        <span className="text-cyber-darkPurple dark:text-cyber-purple">-</span>
                        <span>{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
        break;
      case 'skills':
        addOutput(
          <div className="mt-4 space-y-4 max-w-2xl">
            {SKILLS.map((cat) => (
              <div key={cat.category} className="space-y-2">
                <p className="text-xs font-bold text-cyan-600 dark:text-cyber-cyan uppercase tracking-widest">{cat.category}:</p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(s => (
                    <span key={s} className="px-2 py-1 text-[9px] border border-cyan-500/20 dark:border-cyber-cyan/20 bg-cyan-500/5 dark:bg-cyber-cyan/5 rounded-md text-slate-700 dark:text-slate-300 font-medium">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;
      case 'contact':
        addOutput(
          <div className="flex flex-col gap-3 mt-4">
            <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 group">
              <div className="p-2 border border-black/10 dark:border-white/10 rounded-lg group-hover:border-cyan-600 dark:group-hover:border-cyber-cyan transition-colors"><Phone size={14} className="text-slate-600 dark:text-white/40 group-hover:text-cyan-600 dark:group-hover:text-cyber-cyan" /></div>
              <span className="text-xs text-slate-600 dark:text-white/70 group-hover:text-slate-900 dark:group-hover:text-white transition-colors font-bold tracking-wider">{CONTACT.phone}</span>
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 group">
              <div className="p-2 border border-black/10 dark:border-white/10 rounded-lg group-hover:border-cyan-600 dark:group-hover:border-cyber-cyan transition-colors"><Mail size={14} className="text-slate-600 dark:text-white/40 group-hover:text-cyan-600 dark:group-hover:text-cyber-cyan" /></div>
              <span className="text-xs text-slate-600 dark:text-white/70 group-hover:text-slate-900 dark:group-hover:text-white transition-colors font-bold tracking-wider">{CONTACT.email}</span>
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
              <div className="p-2 border border-black/10 dark:border-white/10 rounded-lg group-hover:border-[#0077b5] transition-colors"><Linkedin size={14} className="text-slate-600 dark:text-white/40 group-hover:text-[#0077b5]" /></div>
              <span className="text-xs text-slate-600 dark:text-white/70 group-hover:text-slate-900 dark:group-hover:text-white transition-colors uppercase font-bold tracking-wider">[ LINKEDIN_PROFILE ]</span>
            </a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
              <div className="p-2 border border-black/10 dark:border-white/10 rounded-lg group-hover:border-slate-900 dark:group-hover:border-white transition-colors"><Github size={14} className="text-slate-600 dark:text-white/40 group-hover:text-slate-900 dark:group-hover:text-white" /></div>
              <span className="text-xs text-slate-600 dark:text-white/70 group-hover:text-slate-900 dark:group-hover:text-white transition-colors uppercase font-bold tracking-wider">[ GITHUB_REPOSITORY ]</span>
            </a>
            <a href={CONTACT.portfolio} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
              <div className="p-2 border border-black/10 dark:border-white/10 rounded-lg group-hover:border-cyber-darkGreen dark:group-hover:border-cyber-green transition-colors"><Globe2 size={14} className="text-slate-600 dark:text-white/40 group-hover:text-cyber-darkGreen dark:group-hover:text-cyber-green" /></div>
              <span className="text-xs text-slate-600 dark:text-white/70 group-hover:text-slate-900 dark:group-hover:text-white transition-colors uppercase font-bold tracking-wider">[ PORTFOLIO ]</span>
            </a>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        break;
      default:
        addOutput(`Unknown instruction: ${trimmed}. Access "help" for a list of valid commands.`, 'error');
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = COMMANDS.find(c => c.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyQueue.length > 0) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < historyQueue.length) {
          setHistoryIndex(nextIndex);
          setInput(historyQueue[nextIndex]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(historyQueue[nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div 
      className="flex-1 overflow-y-auto px-2 py-4 md:p-6 flex flex-col gap-2 font-mono scroll-smooth"
      ref={scrollRef}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex flex-col gap-2">
        {history.map((line) => (
          <motion.div
            key={line.id}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            className={`text-xs md:text-sm ${
              line.type === 'error' ? 'text-rose-600 font-bold' :
              line.type === 'success' ? 'text-cyber-darkGreen dark:text-cyber-green font-bold' :
              line.type === 'command' ? 'text-cyan-700 dark:text-cyber-cyan font-bold' :
              'text-slate-700 dark:text-white/90'
            }`}
          >
            {line.content}
          </motion.div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-auto pt-6 border-t border-black/5 dark:border-white/5">
        <span className="text-cyan-700 dark:text-cyber-cyan font-bold shrink-0">parth@neural-node:~$</span>
        <input
          ref={inputRef}
          autoFocus
          className="bg-transparent border-none outline-none flex-1 text-slate-900 dark:text-white text-xs md:text-sm selection:bg-cyan-500/20 dark:selection:bg-cyber-cyan/30 min-w-0"
          spellCheck={false}
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="text-[10px] text-slate-400 dark:text-white/30 uppercase font-bold tracking-widest mr-2">Neural Suggestions:</span>
        {['about', 'experience', 'projects', 'skills', 'mission', 'resume'].map(q => (
          <button 
            key={q}
            onClick={() => handleCommand(q)}
            className="text-[10px] px-2 py-1 border border-black/10 dark:border-white/10 rounded-md hover:border-cyan-500 hover:text-cyan-700 dark:hover:border-cyber-cyan dark:hover:text-cyber-cyan transition-all text-slate-600 dark:text-white/60 bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-sm font-bold uppercase tracking-tighter"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
