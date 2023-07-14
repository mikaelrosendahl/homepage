import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'

}) 

export class MenuComponent {

  constructor(private translateService: TranslateService) {
    // Set the default language
    this.translateService.setDefaultLang('en');
  }
  showMenu: boolean = true;

  toogleList(){
  this.showMenu = !this.showMenu;

   }

}