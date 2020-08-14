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
  @Input() endDate: Date = new Date();
  @Input() duties: Array<string>;
  @Input() techStack: any;

  constructor() { }

  ngOnInit() {
  }
  getLengthOfTime() {
    let months = 0;
    months = (this.endDate.getFullYear() - this.startDate.getFullYear()) * 12;
    months -= this.startDate.getMonth();
    months += this.endDate.getMonth();
    return months;
  }
}

