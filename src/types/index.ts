import type { ReactNode } from 'react';

export type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  github: string;
  live?: string;
  gradient: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  accent?: boolean;
  current?: boolean;
};

export type SkillGroup = {
  title: string;
  icon: ReactNode;
  skills: string[];
  isLearning?: boolean;
};