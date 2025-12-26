export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  livePreview?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}