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

  constructor() { }

  ngOnInit() {
  }

}


export function CertificationInUIUX(date = "Feb. 2020") {
  console.log("I have attained a BSC accredited certifaction in foundation user experience following a training course on the subject");
}