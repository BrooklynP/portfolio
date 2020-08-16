import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-tile',
  templateUrl: './work-tile.component.html',
  styleUrls: ['./work-tile.component.scss']
})
export class WorkTileComponent implements OnInit {
  @Input() company: string;
  @Input() title: string;
  @Input() startDate: Date;
  @Input() endDate: Date;
  @Input() duties: Array<string>;
  @Input() techStack: any;
  @Input() setID: string;

  public endDateProvided = true;
  public arrayOfLines = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  constructor() { }

  ngOnInit() {
    if (!this.endDate) {
      this.endDate = new Date();
      this.endDateProvided = false;
    }
    window.addEventListener('load', () => {
      this.arrayOfLines = this.calculateHowManyLines();
    });
  }

  getLengthOfTime() {
    let months = 0;
    months = (this.endDate.getFullYear() - this.startDate.getFullYear()) * 12;
    months -= this.startDate.getMonth();
    months += this.endDate.getMonth();
    return months;
  }

  getArrayOfLines() {
    return this.arrayOfLines;
  }

  calculateHowManyLines() {
    const lineHeight = 16;
    const element = document.getElementById(this.setID);
    if (element) {
      const numberOfLines = (element.clientHeight / lineHeight);
      const array = Array(numberOfLines).fill(0);
      return array;
    }
  }
}

