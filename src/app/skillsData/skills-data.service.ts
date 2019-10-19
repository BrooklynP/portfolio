import { Injectable } from '@angular/core';
import { Skill } from 'src/app/models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsDataService {
  private skills: Array<Skill> = [
    {
      name: 'JavaScript'
    },
    {
      name: 'C#'
    },
    {
      name: 'Wordpress'
    },
    {
      name: 'C++'
    },
    {
      name: 'Photoshop'
    },
  ];

  public getSkills(): Array<Skill> {
    return this.skills;
  }

  constructor() { }
}
