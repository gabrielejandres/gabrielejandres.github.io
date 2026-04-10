export type ExperienceItem = {
  company?: string;
  school?: string;
  title: string;
  degree?: string;
  years?: string;
  graduated?: string;
  description: string[];
  ignoreCompany?: boolean;
  dispatcher?: string;
  date?: string;
};

export type GroupedEntry = {
  label: string;
  items: ExperienceItem[];
};
