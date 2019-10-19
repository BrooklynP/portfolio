import { Component, OnInit } from '@angular/core';
import { ProjectsDataService } from 'src/app/portfolioData/projects-data.service';
import { Router } from '@angular/router';
import { SkillsDataService } from 'src/app/skillsData/skills-data.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  public projects: Array<any>;
  public skills: Array<any>;

  constructor(public projectsService: ProjectsDataService, public router: Router, public skillsDataService: SkillsDataService) {
    this.projects = projectsService.getProjects();
    this.skills = this.skillsDataService.getSkills();
   }

  ngOnInit() {
  }

  selectProject(index: number) {
    this.projectsService.setCurrentProject(index);
    this.router.navigate(['/project']);
  }
}
