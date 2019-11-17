export interface Project {
  index: number;
  name: string;
  link?: string;
  desc: string;
  skills: Array<string>;
  visualScreenshots: Array<string>;
  codeScreenshots: Array<string>;
  githubLink?: string;
  skillToFilterBy: string;
}
