import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {

  static currentProject: Project;

  private readonly projects: Array<Project> = [
    {
      name: "Client Portal",
      link: "https://clientportal.a2it.dev/",
      desc: `This is the homepage for the office computer browsers at attend2IT and is also used for clients.
      It acts as a landing page that displays only the links the user needs for their personal day.
      It works with a backend API that allows roles, groups, users and links to be managed by an admin within the app,
      and ties in with keycloak authentication(JWT) to ensure it is Secure.`,
      skills: ["TypeScript", "Angular", "HTTP", "HTML", "CSS"],
      visualScreenshots: ["/assets/project-screenshots/clientportal-visual-screenshot.PNG"],
      codeScreenshots: ["/assets/project-screenshots/clientportal-code-screenshot.PNG"],
      skillToFilterBy: "Angular"
    },
    {
      name: "Silent Auction",
      link: "https://liveauction.a2it.dev/",
      desc: `This is a web based solution to a silent auction. I was tasked with redesigning the old display screens,
      so that they had a more modern appearance and could be responsive with more than just 4:3 screens.
      I first had to design my screens in adobe XD in a way that could be displayed on any screen and worked for the client.
      I opted for a carousel based design, the CSS animations were a challenge as I had not used them before,
      which proved to be a good learning experience.
      I had to work with the back-end developer to ensure the API would provide me with what I needed in my design.
      I also created a single lot page aswell as a screen selection page.`,
      skills: ["TypeScript", "Angular", "HTTP", "HTML", "CSS"],
      visualScreenshots: ["/assets/project-screenshots/silentauction-visual-screenshot.PNG"],
      codeScreenshots: ["/assets/project-screenshots/silentauction-code-screenshot.PNG"],
      skillToFilterBy: "Angular"
    },
    {
      name: "Birdfair Exhibitor List",
      link: "https://birdfair.org.uk/exhibit/",
      desc: `This is an exhibitor display list that is fitted within an iFrame on a wordpress site.
      It is responsive to fit within the iframe on multiple screens. It also includes filters to search by name or by specific area,
      these filters work with each other to ensure the end user can quickly find what they are after.
      It caches the data in locol storage to help speed up the loading process`,
      skills: ["JavaScript", "TypeScript", "Angular", "HTTP", "HTML", "CSS"],
      visualScreenshots: ["/assets/project-screenshots/birdfair-visual-screenshot.png"],
      codeScreenshots: ["/assets/project-screenshots/birdfair-code-screenshot.png"],
      skillToFilterBy: "Angular"
    },
    {
      name: "Sprite Editor",
      link: "",
      desc: `This was an assingment for the module "tools programming". It is a WPF app that lets the user open pictures and edit them,
      making use of many tools you might expect such as layering, various brush sizes and colours as well as shape drawing.
      I achieved a 79% for this assingment`,
      skills: ["C#", "WPF", "XAML"],
      visualScreenshots: ["/assets/project-screenshots/spriteeditor-visual-screenshot.PNG"],
      codeScreenshots: ["/assets/project-screenshots/spriteeditor-code-screenshot.PNG"],
      skillToFilterBy: "WPF"
    },
    {
      name: "Population: Zombies",
      link: "",
      desc: `This was an assingment for the module "programming and mathematics". It is an openGL based top down shooter,
      that makes use of matrices and vector maths to work out AI pathfinding and bullet physics.
      It uses randomly placed powerups and enemies as well as collision physics.
      The main menu uses custom made buttons that work with the mouse for ease of navigation. I achieved 72% for this assingment`,
      skills: ["C++", "OpenGL"],
      visualScreenshots: ["/assets/project-screenshots/zombies-visual-screenshot.PNG"],
      codeScreenshots: ["/assets/project-screenshots/zombies-code-screenshot.PNG"],
      skillToFilterBy: "C++"
    },
    {
      name: "Captive Portal for PFsense",
      link: "",
      desc: `This is a custom captive portal for one of our server racks to act as the default on-site.
      It is free of company branding to make it as versatile as possible but still keeps an essence of the company identity.
      It was created in pure HTML and CSS, while conforming to the PFsense spec for what a captive portal should be.
      It is designed using media queries so that it can be useable on both mobile and desktop,
      as well as accounting a space for a logo that can be quickly uploaded later`,
      skills: ["CSS", "HTML", "Photoshop"],
      visualScreenshots: ["/assets/project-screenshots/captiveportal-visual-screenshot.png"],
      codeScreenshots: [],
      skillToFilterBy: "Angular"
    },
    {
      name: "Wordpress Site To Advertise My Silent Auction Software",
      link: "https://silentauctiontexting.com/",
      desc: `This is a wordpress website used to advertise the silent auction software I created.
      It uses plugins and custom css and javascript in order to be able to host the content in a way we wanted.
      It is also search engine optimised to ensure it shows up in advertisement and social media optimally,
      as that was a key part of this project.`,
      skills: ["Worpress", "HTML", "CSS", "Photoshop", "SEO"],
      visualScreenshots: ["/assets/project-screenshots/silentauction-wordpress-visual-screenshot.PNG"],
      codeScreenshots: ["/assets/project-screenshots/silentauction-wordpress-code-screenshot.PNG"],
      skillToFilterBy: "Wordpress"
    },
    {
      name: "Multiclinic",
      link: "",
      desc: `For the new multiclinic 4 software I was tasked with redesigning the old main menu page.
      I designed it to be more responsive and include modern icons, but it includes a toggle to switch back to the old style.
      (The old style was matched faithfully to the old software but still incldues impprovements on its responsiveness).
      I also helped with developing the diary screen by creating an algorithm that could take in the old database array,
      which included every slot, every staff member was busy, undordered it, and then ordered it,
      sorted out the start and end times of each availibity slot per staff member,
      followed by formatting it in a nicer fashion that could be more easily maintained should the software be upgraded again`,
      skills: ["Angular", "JavaScript", "TypeScript", "CSS", "HTML"],
      visualScreenshots: ["/assets/project-screenshots/mc-visual-screenshot.png"],
      codeScreenshots: [],
      skillToFilterBy: "Angular"
    },
    {
      name: "This Portfolio",
      link: "localhost:4200",
      githubLink: "https://github.com/BrooklynP/portfolio/",
      desc: `This portfolio is an ongoing project I have been doing in my free time to help showcase what I am capable of.
      This portfolio is a big learning project for me as it has proved a useful playground to try out many features
      I wanted to get more familiar with such as filtering arrays,
      working with pure CSS and arrow functions,  GitHub and more.`,
      skills: ["Angular", "HTML", "CSS", "TypeScript"],
      visualScreenshots: ["/assets/project-screenshots/portfolio-visual-screenshot.PNG"],
      codeScreenshots: ["/assets/project-screenshots/portfolio-code-screenshot.PNG"],
      skillToFilterBy: "Angular"
    }
  ];

  constructor() { }

  public getProjects(): Array<Project> {
    return this.projects;
  }

  setCurrentProject(index: number) {
    console.log(this.projects[index]);
    ProjectsDataService.currentProject = this.projects[index];
  }

  getCurrentProject(): Project {
    return ProjectsDataService.currentProject;
  }
}
