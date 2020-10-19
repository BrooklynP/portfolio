import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {
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
      name: "HyperView",
      summary: `A stream monitoring app built with electron and angular`,
      desc: `This app was designed to allow people to monitor mutliple streams recorders at once.
      It provides support for watching various stream formats, as well as allowing control of recorders such as the
      Hyperdeck Studio, and Aja KI Pro through their respective APIs. It also analyses audio data to draw an audiometer on a canvas.
      I also produced the logo using Adobe Illustrator.`,
      skills: ["Electron", "Angular", "REST APIS", "Video JS"],
      screenshots: ["/assets/project-screenshots/hyperview-visual-screenshot.png"],
      skillToFilterBy: "Electron"
    },
    {
      index: 4,
      name: "Travel Blog",
      summary: `This is a travel blog website storing blog posts in a mongoDB database`,
      desc: `I built this travel blog to learn more about back end developement. It allows post creation and viewing,
      and stores posts inside a mongoDB atlas database. I then built an node JS express api, that interacts with the database.
      With the angular front-end, this is my first full stack app.`,
      skills: ["Angular", "Typescript", "Node JS / Express", "Mongo DB", "REST APIs"],
      screenshots: ["/assets/project-screenshots/blog-visual-screenshot.png"],
      skillToFilterBy: "Angular"
    },
    {
      index: 5,
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
      index: 6,
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
      index: 7,
      name: "Captive Portal",
      summary: "The default captive portal for the attend2IT network at events",
      link: "",
      desc: `This is the captive portal for the default network and is the first page users of the wifi will see.
      Created in pure javascript, HTML and CSS. It Uses media queries to ensure it is useable on both mobile and desktop.`,
      skills: ["Javascript", "CSS", "HTML", "Photoshop"],
      screenshots: ["/assets/project-screenshots/captiveportal-visual-screenshot.png"],
      skillToFilterBy: "Angular"
    },
    {
      index: 8,
      name: "Silent Auction",
      summary: "A wordpress to advertise the silent auction software I created",
      link: "https://silentauctiontexting.com/",
      desc: `Making use of plugins, custom CSS and Javascript, this website acts as an advert for the auction software.
      As an advert I made extra effort to ensure it was properly search engine optimised.`,
      skills: ["Wordpress", "HTML", "CSS", "Photoshop", "SEO"],
      screenshots: ["/assets/project-screenshots/silentauction-wordpress-visual-screenshot.PNG"],
      skillToFilterBy: "Wordpress"
    },
    {
      index: 9,
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
      index: 10,
      name: "This Portfolio",
      summary: "A portfolio of some of the projects i'm most proud of",
      link: "brooklynpedley.co.uk",
      githubLink: "https://github.com/BrooklynP/portfolio/",
      desc: `This is the website I use to display all of my best and latest work.
      I am constantly working on it as I learn new things to ensure it is the best website it can be.`,
      skills: ["Angular", "AWS lambda", "AWS API Gateway", "AWS SES", "AWS S3"],
      screenshots: ["/assets/project-screenshots/portfolio-4.jpg",
      "/assets/project-screenshots/portfolio-2.jpg",
      "/assets/project-screenshots/portfolio-3.jpg",
      "/assets/project-screenshots/portfolio-1.jpg", ],
      skillToFilterBy: "Angular"
    },
    {
      index: 11,
      name: "Super Sumo",
      summary: "A 2D party game built in Unity",
      link: "",
      githubLink: "https://github.com/BrooklynP/Super-Sumo/",
      desc: `This is a 2D party game where 4 people use Xbox controllers to move around an arena and push their opponents out of the ring,
      to be the last sumo wrestler standing`,
      skills: ["Unity", "C#"],
      screenshots: ["/assets/project-screenshots/supersumo-visual-screenshot.PNG"],
      skillToFilterBy: "Unity"
    },
    {
      index: 12,
      name: "Rogue RPG",
      summary: "A 3D rogue-like RPG game built in Unity",
      link: "",
      githubLink: "https://github.com/BrooklynP/Unity-Rogue/",
      desc: `This is a 3D rogue-like game.
      You start in a randomly generated map and must move from room to room to eliminate enemies and collect gold.
      The enemies have AI to pathfind and to decide wether to fight or run away based on their vision, health etc.
      Once a level is cleared you move onto a new one, until you die!`,
      skills: ["Unity", "C#"],
      screenshots: ["/assets/project-screenshots/rogue-visual-screenshot.PNG"],
      skillToFilterBy: "Unity"
    },
    {
      index: 13,
      name: "Space Invaders",
      summary: "A faithful reproduction of the classic space invaders",
      link: "",
      githubLink: "https://github.com/BrooklynP/space-invaders/",
      desc: `a OpenGL based reproduction of space invaders. Including fully destructible shields, Stored high scores and more`,
      skills: ["C++", "OpenGL"],
      screenshots: ["/assets/project-screenshots/spaceinvaders-1.PNG",
      "/assets/project-screenshots/spaceinvaders-2.PNG",
      "/assets/project-screenshots/spaceinvaders-3.PNG", ],
      skillToFilterBy: "C++"
    },
  ];

  constructor() { }

  public getProjects(): Array<Project> {
    return this.projects;
  }

  public getProject(index: number): Project {
    return this.projects.find(x => x.index === index);
  }

  public getProjectsLength(): number {
    return this.projects.length;
  }
}
