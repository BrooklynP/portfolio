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

  private readonly messageLine1 = '>Hi!';
  private readonly messageLine2 = ">I'm Brooklyn, an aspiring software developer from Hertfordshire";
  private i = 0;
  private readonly TypingSpeed = 50;


  constructor(public router: Router) {


  }



  typeLine1() {
    if (this.i < this.messageLine1.length) {
      this.messageToDisplayLine1 += this.messageLine1[this.i];
      this.i++;
      setTimeout(() => {this.typeLine1(); }, this.TypingSpeed);
    }
  }

  typeLine2() {
    if (this.i < this.messageLine2.length) {
      this.messageToDisplayLine2 += this.messageLine2[this.i];
      this.i++;
      setTimeout(() => {this.typeLine2(); }, this.TypingSpeed);
    }
  }

  ngOnInit() {
    this.typeLine1();
    setTimeout(() => {
      this.i = 0;
      this.typeLine2();
    }, this.TypingSpeed * (this.messageLine1.length + 1));  // Fires after the first line has typed all its characters
  }

  clickViewProjects() {
    this.router.navigate(['/projects']);
  }
}
