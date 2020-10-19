import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit {
  public messageToDisplayLine1 = '';
  public messageToDisplayLine2 = '';
  public messageToDisplayLine3 = '';
  public messageToDisplayLine4 = '';
  public messageToDisplayLine5 = '';
  public messageToDisplayLine6 = '';
  public messageToDisplayLine7 = '';
  public messageToDisplayLine8 = '';
  public messageToDisplayLine9 = '';
  public messageToDisplayLine10 = '';
  public messageToDisplayLine11 = '';
  public messageToDisplayLine12 = '';
  public messageToDisplayLine13 = '';

  private messageLine1 = 'Tasks: 37 total, 1 running';
  private messageLine2 = ' v1.0.2';
  private messageLine3 = 'Uptime: 00:16:45';
  private messageLine4 = 'Load Avg. 4.85, 2.84, 2.10 CPU Usage: 38.61% user, 29.70% sys, 31.68% idle';
  private messageLine5 = 'SharedLibs: 215M resident, 57M data, 23M linkedit.';
  private messageLine6 = 'MemRegions 318147 total, 5823M resident, 190M private, 2646M shared.';
  private messageLine7 = 'PhysMem: 16G used (3558M wired), 103M unused.';
  private messageLine8 = 'VM: 13T vsize, 1299M framework vsize, 47281010(0) swapins, 49223315(0) swapouts.';
  private messageLine9 = 'Networks: packets: 21230244/27G in, 26612975/3179M out.';
  private messageLine10 = 'Disks: 5635951/270G read, 4674334/276G written.';
  private messageLine11 = "> $echo \"Hi!\"";
  private messageLine12 = "> $echo \"I'm Brooklyn, a full stack developer from Hertfordshire\"";
  private messageLine13 = " > root@portfolio: $echo \"Click Here To See Portfolio\"";

  private readonly TypingSpeed = 5;

  constructor(public router: Router) {
    this.messageLine2 = (new Date()).toISOString() + this.messageLine2;

  }

  typeLine() {
    window.scrollTo(0,document.body.scrollHeight);
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
    } else
    if (this.messageLine3.length > 0) {
      setTimeout(() => {
        this.messageToDisplayLine3 += this.messageLine3[0];
        this.messageLine3 = this.messageLine3.substring(1);
        this.typeLine();
      }, this.TypingSpeed);
    } else
    if (this.messageLine4.length > 0) {
      setTimeout(() => {
        this.messageToDisplayLine4 += this.messageLine4[0];
        this.messageLine4 = this.messageLine4.substring(1);
        this.typeLine();
      }, this.TypingSpeed);
    } else
    if (this.messageLine5.length > 0) {
      setTimeout(() => {
        this.messageToDisplayLine5 += this.messageLine5[0];
        this.messageLine5 = this.messageLine5.substring(1);
        this.typeLine();
      }, this.TypingSpeed);
    } else
    if (this.messageLine6.length > 0) {
      setTimeout(() => {
        this.messageToDisplayLine6 += this.messageLine6[0];
        this.messageLine6 = this.messageLine6.substring(1);
        this.typeLine();
      }, this.TypingSpeed);
    } else
    if (this.messageLine7.length > 0) {
      setTimeout(() => {
        this.messageToDisplayLine7 += this.messageLine7[0];
        this.messageLine7 = this.messageLine7.substring(1);
        this.typeLine();
      }, this.TypingSpeed);
    } else
    if (this.messageLine8.length > 0) {
      setTimeout(() => {
        this.messageToDisplayLine8 += this.messageLine8[0];
        this.messageLine8 = this.messageLine8.substring(1);
        this.typeLine();
      }, this.TypingSpeed);
    } else
    if (this.messageLine9.length > 0) {
      setTimeout(() => {
        this.messageToDisplayLine9 += this.messageLine9[0];
        this.messageLine9 = this.messageLine9.substring(1);
        this.typeLine();
      }, this.TypingSpeed);
    } else
    if (this.messageLine10.length > 0) {
      setTimeout(() => {
        this.messageToDisplayLine10 += this.messageLine10[0];
        this.messageLine10 = this.messageLine10.substring(1);
        this.typeLine();
      }, this.TypingSpeed);
    } else
    if (this.messageLine11.length > 0) {
      setTimeout(() => {
        if(this.messageToDisplayLine11.length === 9) {
          this.messageToDisplayLine11 += '<span>';
        } else if(this.messageToDisplayLine11.length === 18) {
          this.messageToDisplayLine11 += '</span>';
        }
        this.messageToDisplayLine11 += this.messageLine11[0];
        this.messageLine11 = this.messageLine11.substring(1);
        this.typeLine();
      }, this.TypingSpeed);
    } else
    if (this.messageLine12.length > 0) {
      setTimeout(() => {
        if(this.messageToDisplayLine12.length === 9) {
          this.messageToDisplayLine12 += '<span>';
        } else if(this.messageToDisplayLine12.length === 70) {
          this.messageToDisplayLine12 += '</span>';
        }
        this.messageToDisplayLine12 += this.messageLine12[0];
        this.messageLine12 = this.messageLine12.substring(1);
        this.typeLine();
      }, this.TypingSpeed);
    } else
    if (this.messageLine13.length > 0) {
      setTimeout(() => {
        if(this.messageToDisplayLine13.length === 26) {
          this.messageToDisplayLine13 += '<span>';
        } else if(this.messageToDisplayLine13.length === 59) {
          this.messageToDisplayLine13 += '</span>';
        }
        this.messageToDisplayLine13 += this.messageLine13[0];
        this.messageLine13 = this.messageLine13.substring(1);
        this.typeLine();
      }, this.TypingSpeed);
    } else {

    }
  }

  ngOnInit() {
    this.typeLine();
  }

  clickViewProjects() {
    this.router.navigate(['/projects']);
  }
}
