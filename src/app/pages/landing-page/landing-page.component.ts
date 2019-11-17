import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  private readonly messageLine1 = '>Hi!';
  private readonly messageLine2 = ">I'm Brooklyn, an aspiring software developer from Hertfordshire";

  public messageToDisplayLine1 = '';
  public messageToDisplayLine2 = "";

  private i = 0;
  private readonly speed = 50;


  constructor(public router: Router) {


  }



  typeLine1() {
    if (this.i < this.messageLine1.length) {

      this.messageToDisplayLine1 += this.messageLine1[this.i];
      this.i++;
      setTimeout(() => {this.typeLine1(); }, this.speed);
    }
  }

  typeLine2() {
    if (this.i < this.messageLine2.length) {

      this.messageToDisplayLine2 += this.messageLine2[this.i];
      this.i++;
      setTimeout(() => {this.typeLine2(); }, this.speed);
    }
  }

  ngOnInit() {
    this.typeLine1();
    console.log("finished");
    setTimeout(() => {
      this.i = 0;
      this.typeLine2();
    }, this.speed * (this.messageLine1.length + 1));

    // setTimeout( () => {
    //   this.messageToDisplayLine1 += this.messageLine1[0];
    //   this.messageLine1 = this.messageLine1.substring(1, this.messageLine1.length);
    //   console.log("hello");
    // }, 500);
    // while (this.messageLine1.length > 0) {
    //   setTimeout(() => {
    //     this.messageToDisplayLine1 += this.messageLine1[0];
    //     this.messageLine1 = this.messageLine1.substring(1, this.messageLine1.length);
    //     console.log(this.messageToDisplayLine1);
    //   }, 500);
    // }
  }

  clickViewProjects() {
    this.router.navigate(['/projects']);
  }
}
