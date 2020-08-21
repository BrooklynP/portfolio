import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private showSideMenu = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSideMenu() {
    this.showSideMenu = !this.showSideMenu;
  }

  shouldShowSideMenu(): boolean {
    return this.showSideMenu;
  }
}
