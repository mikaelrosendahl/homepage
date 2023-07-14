import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'

}) 

export class MenuComponent {
currentLanguage: string;
switchLanguage() {
  const lang = this.currentLanguage === 'en' ? 'sv' : 'en';
  this.translateService.use(lang);
  this.currentLanguage = lang;
}

  constructor(private translateService: TranslateService) {
    // Set the default language
    this.currentLanguage = this.translateService.currentLang;
    this.translateService.setDefaultLang('en');
  }
  showMenu: boolean = true;

  toogleList(){
  this.showMenu = !this.showMenu;

   }

}