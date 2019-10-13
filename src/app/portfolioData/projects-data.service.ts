import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {
  public projects: Array<any> = [
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
    },
    {
      name: "Sprite Editor",
      link: "",
      desc: `This was an assingment for the module "tools programming". It is a WPF app that lets the user open pictures and edit them.
      You can use multiple layers, a variety of tools and any rgb colour. I achieved a first class for this assingment`,
      skills: ["C#", "WPF", "XAML"],
      visualScreenshots: ["/assets/project-screenshots/spriteeditor-visual-screenshot.PNG"],
      codeScreenshots: ["/assets/project-screenshots/spriteeditor-code-screenshot.PNG"]
    },
    {
      name: "Population: Zombies",
      link: "",
      desc: `This was an assingment for the module "programming and mathematics". It is an openGL based top down shooter,
      that makes use of matrices and vector maths to work out AI pathfinding and bullet physics.
      It uses randomly placed powerups and enemies.`,
      skills: ["C++", "OpenGL"],
      visualScreenshots: ["/assets/project-screenshots/zombies-visual-screenshot.PNG"],
      codeScreenshots: ["/assets/project-screenshots/zombies-code-screenshot.PNG"]
    },
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
      skills: ["Worpress", "HTML", "CSS", "Photoshop", "SEO"],
      visualScreenshots: ["/assets/project-screenshots/silentauction-wordpress-visual-screenshot.PNG"],
      codeScreenshots: ["/assets/project-screenshots/silentauction-wordpress-code-screenshot.PNG"]
    }
  ];

  constructor() { }

  public getProjects() {
    return this.projects;
  }
}
