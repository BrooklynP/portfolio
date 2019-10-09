import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  // lineOne: string;
  // lineTwo: string;
  // typingCursor1 = 0;
  // typingCursor2 = 0;
  // typingSpeed = 50;
  constructor() {

    // document.addEventListener('DOMContentLoaded', (event) => {
    //   this.typeWriter();
    // });

  }

  ngOnInit() {
  }

  // typeWriter() {
  //   this.lineOne = '>Hi!';
  //   this.lineTwo  = ">I'm Brooklyn, a front-end web developer from Hertfordshire";
  //   if (this.typingCursor1 < this.lineOne.length) {
  //     document.getElementById("line1").innerHTML += this.lineOne.charAt(this.typingCursor1);
  //     this.typingCursor1++;
  //     setTimeout(this.typeWriter, this.typingSpeed);
  //   } else if (this.typingCursor2 < this.lineTwo.length) {
  //     document.getElementById("line2").innerHTML += this.lineTwo.charAt(this.typingCursor2);
  //     this.typingCursor2++;
  //     setTimeout(this.typeWriter, this.typingSpeed);
  //   }
  // }

}
