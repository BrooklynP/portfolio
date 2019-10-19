import { Component, OnInit } from '@angular/core';
import { ProjectsDataService } from 'src/app/portfolioData/projects-data.service';

@Component({
  selector: 'app-single-project-page',
  templateUrl: './single-project-page.component.html',
  styleUrls: ['./single-project-page.component.scss']
})
export class SingleProjectPageComponent implements OnInit {

  public project: any;

  constructor(public projectDataService: ProjectsDataService) { }

  ngOnInit() {
    this.project = this.projectDataService.getCurrentProject();
  }

}
