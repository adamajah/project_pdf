export type CVTemplate = "minimal" | "professional" | "creative";

export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  objective: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface Language {
  name: string;
  level: "basic" | "intermediate" | "fluent" | "native";
}

export interface CVFormData {
  personalInfo: PersonalInfo;
  summary: string;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  languages: Language[];
}

export interface ReviewItem {
  section: string;
  title: string;
  description: string;
  severity: "low" | "medium" | "high" | "positive";
  suggestion?: string;
  example?: string;
}

export interface Suggestion {
  title: string;
  text: string;
}

export interface ReviewData {
  cvTitle: string;
  summary: string;
  items: ReviewItem[];
  suggestions: Suggestion[];
  score: {
    overall: number;
    content: number;
    formatting: number;
    language: number;
  };
}