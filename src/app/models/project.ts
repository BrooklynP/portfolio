export interface Project {
  index: number;
  name: string;
  link?: string;
  summary: string;
  desc: string;
  skills: Array<string>;
  screenshots: Array<string>;
  githubLink?: string;
  skillToFilterBy: string;
}
