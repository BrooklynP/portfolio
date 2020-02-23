import { Component, OnInit } from '@angular/core';
import { ProjectsDataService } from 'src/app/portfolioData/projects-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-single-project-page',
  templateUrl: './single-project-page.component.html',
  styleUrls: ['./single-project-page.component.scss']
})
export class SingleProjectPageComponent implements OnInit {

  public currentScreenshot = 0;

  public project: Project;

  constructor(public projectDataService: ProjectsDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((param) => {
      if (param.uid >= this.projectDataService.getProjectsLength()) {
        this.router.navigateByUrl('/projects');

      }
      this.project = this.projectDataService.getProject(parseInt(param.uid, 10));
    });
  }

  nextScreenshot() {
    if (this.currentScreenshot === this.project.screenshots.length - 1) {
      this.currentScreenshot = 0;
    } else {
      this.currentScreenshot++;
    }
  }

  previousScreenshot() {
    if (this.currentScreenshot === 0) {
      this.currentScreenshot = this.project.screenshots.length - 1;
    } else {
      this.currentScreenshot--;
    }
  }

  selectScreenshot(index: number) {
    this.currentScreenshot = index;
  }
}
