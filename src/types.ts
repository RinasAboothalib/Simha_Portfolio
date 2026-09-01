export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  icon: string;
  description?: string;
}

export interface FocusArea {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  icon: string;
}

export interface CoreStrength {
  title: string;
  description: string;
  tag: string;
}

export interface UxPrinciple {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: string;
  name: string;
  description: string;
  icon: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
  notes: string;
}

export interface EducationItem {
  degree: string;
  shortName: string;
  institution: string;
  parentOrg: string;
  expectedYear: string;
  location: string;
  description: string;
  highlights: string[];
}

export type ActiveTabType = 'browse' | 'ai-desc' | 'exchange' | 'admin';
