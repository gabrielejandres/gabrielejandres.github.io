export interface SocialLink {
  name: string;
  url: string;
  className: string;
}

export interface MainInfo {
  name: string;
  image: string;
  email: string;
  github: string;
  behance: string;
  social: SocialLink[];
}

export interface Skill {
  name: string;
  image: string;
  group?: 'Languages' | 'Frameworks' | 'Cloud' | 'Tools' | 'Databases' | string;
}

export interface Project {
  title: string;
  category: string;
  image: string;
  url: string;
  descriptionKey?: string;
  description?: string;
  technologies?: string[];
  year?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  graduated: string;
  description: string[];
}

export interface WorkItem {
  company: string;
  title: string;
  years: string;
  description: string[];
  ignoreCompany?: boolean;
}

export interface ExtraItem {
  title: string;
  dispatcher: string;
  date: string;
  credential: string;
}

export interface VolunteeringItem {
  company: string;
  title: string;
  years: string;
  description: string[];
  ignoreCompany?: boolean;
}

export interface Resume {
  education: {
    title: string;
    data: EducationItem[];
  };
  work: {
    title: string;
    data: WorkItem[];
  };
  extra: {
    title: string;
    data: ExtraItem[];
  };
  volunteering: {
    title: string;
    data: VolunteeringItem[];
  };
}

export interface PortfolioData {
  main: MainInfo;
  skills: Skill[];
  portfolio: {
    projects: Project[];
  };
}

export type Language = 'en' | 'pt' | 'fr';
