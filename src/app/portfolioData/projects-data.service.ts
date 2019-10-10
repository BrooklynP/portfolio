import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {
  public projects: Array<any> = [
    {
      name: "This Portfolio",
      link: "localhost:4200",
      desc: `My portfolio is a project I undertook myself to help display my work.
      The biggest challenge of this project was making it pretty as I have not used a css framework`,
      skills: ["Angular", "HTML", "CSS", "JavaScript", "TypeScript"],
      visualScreenshots: ["/assets/project-screenshots/portfolio-visual-screenshot.PNG"],
      codeScreenshots: ["/assets/project-screenshots/portfolio-code-screenshot.PNG"]
    },
    {
      name: "Wordpress Site To Advertise My Silent Auction Software",
      link: "https://silentauction.a2it.dev/",
      desc: `This was my first work with wordpress. I have created a site to advertise some software I made,
      using photoshopped mockups and plugins. I also used yellow pencil to make the css exactly how I wanted it to look.`,
      skills: ["Worpress", "HTML", "CSS", "Photoshop"],
      visualScreenshots: ["/assets/project-screenshots/silentauction-wordpress-visual-screenshot.PNG"],
      codeScreenshots: ["/assets/project-screenshots/silentauction-wordpress-code-screenshot.PNG"]
    }
  ];

  constructor() { }

  public getProjects() {
    return this.projects;
  }
}
