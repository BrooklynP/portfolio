import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsDataService {
  private readonly skills: Array<string> = ['Angular', 'Electron', 'Wordpress', 'WPF', 'C++', 'Unity'];

  public getFilterableSkills(): Array<string> {
    return this.skills;
  }

  constructor() { }
}
