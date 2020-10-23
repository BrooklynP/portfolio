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
  @Input() logoPath: string;


  public endDateProvided = true;
  public arrayOfLines = [];

  constructor() { }

  ngOnInit() {
    console.log(this.logoPath);
    if (!this.endDate) {
      this.endDate = new Date();
      this.endDateProvided = false;
    }
    window.addEventListener('load', () => {
      this.arrayOfLines = this.calculateHowManyLines();
    });
  }

  getLengthOfTime(): number {
    let months = 0;
    months = (this.endDate.getFullYear() - this.startDate.getFullYear()) * 12;
    months -= this.startDate.getMonth();
    months += this.endDate.getMonth();
    return months;
  }

  getArrayOfLines(): Array<number> {
    return this.arrayOfLines;
  }

  calculateHowManyLines() {
    const lineHeight = document.getElementById(this.setID + 'p');
    const element = document.getElementById(this.setID);
    if (element) {
      const numberOfLines = Math.round(element.clientHeight / lineHeight.clientHeight);
      const array = Array(numberOfLines).fill(0);
      return array;
    }
  }
}

