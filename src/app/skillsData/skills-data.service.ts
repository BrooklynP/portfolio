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
      name: 'Wordpress',
      isFilterable: true
    },
    {
      name: 'C++',
      isFilterable: true
    },
    {
      name: 'Java'
    },
    {
      name: 'Adobe XD'
    },
    {
      name: 'Angular',
      isFilterable: true
    },
    {
      name: 'APIs'
    },
    {
      name: 'WPF',
      isFilterable: true
    },
    {
      name: 'Photoshop'
    },
  ];

  public getSkills(): Array<Skill> {
    return this.skills;
  }

  public getFilterableSkills(): Array<Skill> {
    return this.skills.filter(skill => {
      return skill.isFilterable === true;
    });
  }

  constructor() { }
}
