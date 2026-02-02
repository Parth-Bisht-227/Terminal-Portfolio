import React from 'react';

export interface Project {
  id: string;
  name: string;
  role: string;
  tech: string[];
  description: string;
  link?: string;
}

export interface TerminalLine {
  id: string;
  content: string | React.ReactNode;
  type: 'command' | 'output' | 'error' | 'success';
}

export type CommandHandler = (args: string[]) => void;