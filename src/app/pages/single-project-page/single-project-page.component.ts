import { Component, OnInit } from '@angular/core';
import { ProjectsDataService } from 'src/app/portfolioData/projects-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-project-page',
  templateUrl: './single-project-page.component.html',
  styleUrls: ['./single-project-page.component.scss']
})
export class SingleProjectPageComponent implements OnInit {

  public project: any;

  constructor(public projectDataService: ProjectsDataService, public router: Router) { }

  ngOnInit() {
    this.project = this.projectDataService.getCurrentProject();
    if (this.project === undefined) {
      console.warn("There was no project selected");
      this.router.navigate(['']);
    }
  }

}
