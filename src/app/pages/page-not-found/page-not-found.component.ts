import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  public errorMessage = `
  ___________________________________
  < Oops! 404 Error: Page Not Found >
  -----------------------------------
          \   ^__^
           \  (XX)\_______
              (__)\       )\/\
               U  ||----w |
                  ||     ||
                  `;
  constructor() { }

  ngOnInit() {
  }

}
