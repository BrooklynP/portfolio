import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {

  static currentProject: Project;

  private readonly projects: Array<Project> = [
    {
      index: 0,
      name: "Client Portal",
      desc: `This is the homepage for the office computer browsers at attend2IT and is also used for clients.
      It acts as a landing page that displays only the links the user needs for their personal day.
      It works with a backend API that allows roles, groups, users and links to be managed by an admin within the app,
      and ties in with keycloak authentication(JWT) to ensure it is Secure.`,
      skills: ["TypeScript", "Angular", "HTML", "CSS"],
      visualScreenshots: ["/assets/project-screenshots/clientportal-visual-screenshot.PNG"],
      codeScreenshots: ["/assets/project-screenshots/clientportal-code-screenshot.PNG"],
      skillToFilterBy: "Angular"
    },
    {
      index: 1,
      name: "Silent Auction",
      desc: `This is a web based solution to a silent auction. I was tasked with redesigning the old display screens,
      so that they had a more modern appearance and could be responsive with more than just 4:3 screens.
      I first had to design my screens in adobe XD in a way that could be displayed on any screen and worked for the client.
      I opted for a carousel based design, the CSS animations were a challenge as I had not used them before,
      which proved to be a good learning experience.
      I had to work with the back-end developer to ensure the API would provide me with what I needed in my design.
      I also created a single lot page aswell as a screen selection page.`,
      skills: ["TypeScript", "Angular", "HTML", "CSS"],
      visualScreenshots: ["/assets/project-screenshots/silentauction-visual-screenshot.PNG"],
      codeScreenshots: ["/assets/project-screenshots/silentauction-code-screenshot.PNG"],
      skillToFilterBy: "Angular"
    },
    {
      index: 2,
      name: "People Counter",
      desc: `This is a dashboard to view the status of people counter cameras.
      It uses an api that detects what people counters are on the same network and then displays them on graphs, using Highcharts.js.
      It allows people to create groups of counters so they can organise them by area,
      and displays appropritate graphs with only the data they want to see.
      It required high performance array functions as each array of counter data contains upwards of thousands of counts,
      and these arrays then need to be mapped together multiple times a minute.
      I am very proud of the fact it was successfully used at a samsung exhibiton event`,
      skills: ["TypeScript", "Angular", "HTML", "CSS"],
      visualScreenshots: ["/assets/project-screenshots/peoplecounter-visual-screenshot.jpg"],
      codeScreenshots: ["/assets/project-screenshots/silentauction-code-screenshot.PNG"],
      skillToFilterBy: "Angular"
    },
    {
      index: 3,
      name: "Birdfair Exhibitor List",
      desc: `This is an exhibitor display list that is fitted within an iFrame on a wordpress site.
      It is responsive to fit within the iframe on multiple screens. It also includes filters to search by name or by specific area,
      these filters work with each other to ensure the end user can quickly find what they are after.
      It caches the data in locol storage to help speed up the loading process`,
      skills: ["JavaScript", "TypeScript", "Angular", "HTML", "CSS"],
      visualScreenshots: ["/assets/project-screenshots/birdfair-visual-screenshot.png"],
      codeScreenshots: ["/assets/project-screenshots/birdfair-code-screenshot.png"],
      skillToFilterBy: "Angular"
    },
    {
      index: 4,
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
      index: 5,
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
      index: 6,
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
      index: 7,
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
      index: 8,
      name: "Giphy Clone",
      link: "",
      githubLink: "https://github.com/BrooklynP/giphee",
      desc: `I created this app as a clone of the giphy website using their API in order to better understand how to use REST API's.`,
      skills: ["Angular", "TypeScript", "CSS", "HTML"],
      visualScreenshots: ["/assets/project-screenshots/giphy-visual-screenshot.PNG"],
      codeScreenshots: [],
      skillToFilterBy: "Angular"
    },
    {
      index: 9,
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
    ProjectsDataService.currentProject = this.projects.find(
      (project) => {
        return project.index === index;
      }
    );
  }

  getCurrentProject(): Project {
    return ProjectsDataService.currentProject;
  }
}
