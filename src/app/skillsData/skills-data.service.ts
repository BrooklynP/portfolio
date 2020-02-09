import { Injectable } from '@angular/core';
import { Skill } from 'src/app/models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsDataService {
  private skills: Array<Skill> = [
    // Languages
    {
      name: 'JavaScript'
    },
    {
      name: 'TypeScript'
    },
    {
      name: 'HTML'
    },
    {
      name: 'CSS'
    },
    {
      name: 'C++',
      isFilterable: true
    },
    // Types Of App
    {
      name: 'Angular',
      isFilterable: true
    },
    {
      name: 'Wordpress',
      isFilterable: true
    },
    {
      name: 'WPF',
      isFilterable: true
    },
    // Production Software
    {
      name: 'Photoshop'
    },
    {
      name: 'Adobe XD'
    },
    {
      name: 'Unity'
    },
    // Version Control
    {
      name: 'BitBucket'
    },
    {
      name: 'GitHub'
    },
    // Web services
    {
      name: 'AWS'
    },
    // Operating Systems
    {
      name: 'Windows'
    },
    {
      name: 'Mac OS'
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
