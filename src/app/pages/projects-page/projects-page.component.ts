import { Component, OnInit } from '@angular/core';
import { ProjectsDataService } from 'src/app/portfolioData/projects-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  public projects: Array<any>;

  constructor(public projectsService: ProjectsDataService, public router: Router) {
    this.projects = projectsService.getProjects();
   }

  ngOnInit() {
  }

  selectProject(index: number) {
    this.projectsService.setCurrentProject(index);
    this.router.navigate(['/project']);
  }
}
