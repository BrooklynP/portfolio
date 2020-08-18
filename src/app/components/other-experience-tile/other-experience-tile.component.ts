import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-other-experience-tile',
  templateUrl: './other-experience-tile.component.html',
  styleUrls: ['./other-experience-tile.component.scss']
})
export class OtherExperienceTileComponent implements OnInit {
  @Input() date: Date;
  @Input() text: string;
  @Input() experienceTitle: string;
  @Input() setID: string;

  public arrayOfLines = [];

  constructor() { }

  ngOnInit() {
    window.addEventListener('load', () => {
      this.arrayOfLines = this.calculateHowManyLines();
    });
  }

  getArrayOfLines() {
    return this.arrayOfLines;
  }

  calculateHowManyLines() {
    const line = document.getElementById(this.setID + 'p');
    const element = document.getElementById(this.setID);
    if (element) {
      const numberOfLines = Math.round(element.clientHeight / line.clientHeight);
      const array = Array(numberOfLines).fill(0);
      return array;
    }
  }
}