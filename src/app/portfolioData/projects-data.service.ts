import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {
  public projects: Array<any> = [
    {
      name: "This Portfolio",
      link: "localhost:4200",
      githubLink: "https://github.com/BrooklynP/portfolio/",
      desc: `My portfolio is a project I undertook myself to help display my work.
      The biggest challenge of this project was making it pretty as I have not used a css framework`,
      skills: ["Angular", "HTML", "CSS", "JavaScript", "TypeScript"],
      visualScreenshots: ["/assets/project-screenshots/portfolio-visual-screenshot.PNG"],
      codeScreenshots: ["/assets/project-screenshots/portfolio-code-screenshot.PNG"]
    },
    {
      name: "Wordpress Site To Advertise My Silent Auction Software",
      link: "https://silentauctiontexting.com/",
      desc: `This was my first work with wordpress. I have created a site to advertise some software I made,
      using photoshopped mockups and plugins. I also used yellow pencil to make the css exactly how I wanted it to look.`,
      skills: ["Worpress", "HTML", "CSS", "Photoshop"],
      visualScreenshots: ["/assets/project-screenshots/silentauction-wordpress-visual-screenshot.PNG"],
      codeScreenshots: ["/assets/project-screenshots/silentauction-wordpress-code-screenshot.PNG"]
    },
    {
      name: "Client Portal",
      link: "https://clientportal.a2it.dev/",
      desc: `This was an internal project I did at attend2IT. It acts as the landing page for our clients and staff,
      and is the homepage of all office computer browsers.`,
      skills: ["JavaScript", "TypeScript", "Angular", "HTTP", "HTML", "CSS"],
      visualScreenshots: ["/assets/project-screenshots/clientportal-visual-screenshot.PNG"],
      codeScreenshots: ["/assets/project-screenshots/clientportal-code-screenshot.PNG"]
    },
    {
      name: "Silent Auction",
      link: "https://liveauction.a2it.dev/",
      desc: `This was a web app for attend2IT. It is a silent auction app where users bid by texting,
       and the auction lots are displayed on a screen. The biggest challenge of this project was learning CSS animations
       in order to produce a moving carousel of all the lots on screen.`,
      skills: ["JavaScript", "TypeScript", "Angular", "HTTP", "HTML", "CSS"],
      visualScreenshots: ["/assets/project-screenshots/silentauction-visual-screenshot.PNG"],
      codeScreenshots: ["/assets/project-screenshots/silentauction-code-screenshot.PNG"]
    }
  ];

  constructor() { }

  public getProjects() {
    return this.projects;
  }
}
