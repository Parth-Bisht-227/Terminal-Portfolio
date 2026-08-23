import React from 'react';

export interface Project {
  id: string;
  name: string;
  status: string;
  section: 'featured' | 'personal' | 'earlier';
  tech: string[];
  highlights: string[];
  links: Array<{
    label: string;
    href: string;
  }>;
}

export interface TerminalLine {
  id: string;
  content: string | React.ReactNode;
  type: 'command' | 'output' | 'error' | 'success';
}

export type CommandHandler = (args: string[]) => void;
