import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private readonly millisecondsInAYear = 31536000000;
  constructor() { }

  ngOnInit() {
  }

  createDate(date: string) {
    return new Date(date);
  }

  getExperience(date: string) {
    const  today = new Date();
    const startDate = new Date(date);
    const experienceInYears = ((today.getTime() - startDate.getTime()) / this.millisecondsInAYear).toFixed(1);
    return experienceInYears;
  }

}
