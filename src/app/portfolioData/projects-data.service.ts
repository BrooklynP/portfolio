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
      summary: "A dashboard for staff at attend2IT, providing them with all the links they use on a day-to-day basis.",
      desc: `This was my first work for attend2IT as an entry level project to prove my ability.
      It is the homepage for the office computer browsers at attend2IT. It is designed to be  versatile, categorising links for groups,
      roles and individual users so that it can be personalised to only contain the links that are relevant to specific user,
      while staying easily maintainable for when new links become relevant.`,
      skills: ["Angular", "Typescript", "AWS s3 & Cloudfront", "Bootstrap", "REST APIs", "Keycloak JWT Authentication"],
      screenshots: ["/assets/project-screenshots/clientportal-visual-screenshot.PNG"],
      skillToFilterBy: "Angular"
    },
    {
      index: 1,
      name: "Silent Auction",
      summary: "A Webapp for people hosting silent auctions, displaying current bids in a variety of fun combinations",
      desc: `I was tasked with redesigning the old display screens,
      so that they had a more modern appearance and could be responsive with more than just 4:3 screens.
      I opted for a carousel based design using CSS animations,
      as this left no wasted space and was visually pleasing while still displaying all the data.
      I had to work with the back-end developer to ensure the API would provide me with what I needed in my design.`,
      skills: ["Angular", "Typescript", "Material", "REST APIs", "Designed First In Adobe XD"],
      screenshots: ["/assets/project-screenshots/silentauction-visual-screenshot.PNG"],
      skillToFilterBy: "Angular"
    },
    {
      index: 2,
      name: "People Couting",
      summary: `A dashboard for people counting devices, displaying summaries and graphs of data,
      such as total people in and busiest areas`,
      desc: `This app was sourced for a Samsung exhibition event so that they could see which areas of the event were busiest.
      It displays thousands of entries and exits on an array of different graphs. And allows users to create their own groups,
      so that they can organise them by area to better see the data they need.
      Due to the amount of data and requirement to constantly update and redraw the graphs,
      it was a priority to ensure performance efficient code was used.`,
      skills: ["Angular", "Typescript", "HighChartsJS", "AWS s3 & Cloudfront", "REST APIs", "Keycloak JWT Authentication"],
      screenshots: ["/assets/project-screenshots/peoplecounter-visual-screenshot.jpg"],
      skillToFilterBy: "Angular"
    },
    {
      index: 3,
      name: "Birdfair Exhibitor List",
      summary: "An embedded Angular app displaying a list of exhibitors at the event, with filtering and searching functionality",
      desc: `This is an exhibitor display list that is fitted within an iFrame on a wordpress site.
      It is responsive to fit within the iframe on multiple screens. It also includes filters to search by name or by specific area,
      these filters work with each other to ensure the end user can quickly find what they are after.
      It caches the data in locol storage to help speed up the loading process`,
      skills: ["Angular", "Typescript", "Wordpress", "REST APIs"],
      screenshots: ["/assets/project-screenshots/birdfair-visual-screenshot.png"],
      skillToFilterBy: "Angular"
    },
    {
      index: 4,
      name: "Sprite Editor",
      summary: "A Desktop app for creating and editing multi layered sprites, with a variety of art tools",
      link: "",
      desc: `This was an assingment for the module "tools programming". It is a WPF app that lets the user open pictures and edit them,
      making use of many tools you might expect such as layering, various brush sizes and colours as well as shape drawing.`,
      skills: ["C#", "WPF", "XAML"],
      screenshots: ["/assets/project-screenshots/spriteeditor-visual-screenshot.PNG"],
      skillToFilterBy: "WPF"
    },
    {
      index: 5,
      name: "Population: Zombies",
      summary: "A top-down 2D shooter game, where you survive for as long as you can against hordes of zombies",
      link: "",
      desc: `This was an assingment for the module "programming and mathematics". It is an openGL based top down shooter,
      that makes use of matrices and vector maths to work out AI pathfinding and bullet physics.
      It uses randomly placed powerups and enemies as well as collision physics.
      The main menu uses custom made buttons that work with the mouse for ease of navigation`,
      skills: ["C++", "OpenGL"],
      screenshots: ["/assets/project-screenshots/zombies-visual-screenshot.PNG"],
      skillToFilterBy: "C++"
    },
    {
      index: 6,
      name: "Captive Portal for PFsense",
      summary: "The default captive portal for the attend2IT network at events",
      link: "",
      desc: `This is the captive portal for the default network and is the first page users of the wifi will see.
      Created in pure javascript, HTML and CSS. It Uses media queries to ensure it is useable on both mobile and desktop.`,
      skills: ["Javascript", "CSS", "HTML", "Photoshop"],
      screenshots: ["/assets/project-screenshots/captiveportal-visual-screenshot.png"],
      skillToFilterBy: "Angular"
    },
    {
      index: 7,
      name: "Silent Auction Website",
      summary: "A wordpress to advertise the silent auction software I created",
      link: "https://silentauctiontexting.com/",
      desc: `Making use of plugins, custom CSS and Javascript, this website acts as an advert for the auction software.
      As an advert I made extra effort to ensure it was properly search engine optimised.`,
      skills: ["Wordpress", "HTML", "CSS", "Photoshop", "SEO"],
      screenshots: ["/assets/project-screenshots/silentauction-wordpress-visual-screenshot.PNG"],
      skillToFilterBy: "Wordpress"
    },
    {
      index: 8,
      name: "Giphy Clone",
      summary: "A clone of the popular giphy website for searching a large database of gifs for any occasion",
      link: "",
      githubLink: "https://github.com/BrooklynP/giphee",
      desc: `The goal of this app was to get a better understanding of how REST APIs work and how to use a http client.`,
      skills: ["Angular", "REST APIs"],
      screenshots: ["/assets/project-screenshots/giphy-visual-screenshot.PNG"],
      skillToFilterBy: "Angular"
    },
    {
      index: 9,
      name: "This Portfolio",
      summary: "A portfolio of some of the projects i'm most proud of",
      link: "localhost:4200",
      githubLink: "https://github.com/BrooklynP/portfolio/",
      desc: `This is the website I use to display all of my best and latest work.
      I am constantly working on it as I learn new things to ensure it is the best website it can be.`,
      skills: ["Angular"],
      screenshots: ["/assets/project-screenshots/portfolio-visual-screenshot.PNG"],
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
