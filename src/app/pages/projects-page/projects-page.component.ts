import { Component, OnInit } from '@angular/core';
import { ProjectsDataService } from 'src/app/portfolioData/projects-data.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  public projects: Array<any>;

  constructor(public projectsService: ProjectsDataService) {
    this.projects = projectsService.projects;
   }

  ngOnInit() {
  }

}
