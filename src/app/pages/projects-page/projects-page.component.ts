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
  public skillsToFilterBy: Array<string>;
  public currentFilter = 'all';

  constructor(public projectsService: ProjectsDataService, public router: Router, public skillsDataService: SkillsDataService) {
    this.projects = projectsService.getProjects();
    this.skillsToFilterBy = this.skillsDataService.getFilterableSkills();
   }

  ngOnInit() {
  }


  getSelectedClass(skillName: string): boolean {
    return skillName === this.currentFilter;
  }

  selectProject(index: number) {
    this.router.navigate(['/projects', index]);
  }

  selectFilter(filterBy: string) {
    this.currentFilter = filterBy;
    if (filterBy === 'all') {
      this.projects = this.projectsService.getProjects();
      return;
    }

    this.projects = this.projectsService.getProjects().filter(project => {
      return project.skillToFilterBy === this.currentFilter;
    });  }
}
