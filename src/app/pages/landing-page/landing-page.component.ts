import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public messageToDisplayLine1 = '';
  public messageToDisplayLine2 = "";

  private messageLine1 = '>Hi!';
  private messageLine2 = ">I'm Brooklyn, an aspiring software developer from Hertfordshire";
  private readonly TypingSpeed = 50;


  constructor(public router: Router) {


  }

  typeLine() {
    if (this.messageLine1.length > 0) {
      setTimeout(() => {
        this.messageToDisplayLine1 += this.messageLine1[0];
        this.messageLine1 = this.messageLine1.substring(1);
        this.typeLine();
      }, this.TypingSpeed);
    } else
    if (this.messageLine2.length > 0) {
      setTimeout(() => {
        this.messageToDisplayLine2 += this.messageLine2[0];
        this.messageLine2 = this.messageLine2.substring(1);
        this.typeLine();
      }, this.TypingSpeed);
    }
  }

  ngOnInit() {
    this.typeLine();
  }

  clickViewProjects() {
    this.router.navigate(['/projects']);
  }
}
