import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
 
})

export class HomeComponent {
  currentLanguage: string;
  switchLanguage() {
    const lang = this.currentLanguage === 'sv' ? 'en' : 'sv';
    this.translateService.use(lang);
    this.currentLanguage = lang;
  }

  constructor(private translateService: TranslateService) {
    // Set the default language
    this.currentLanguage = this.translateService.currentLang;
    this.translateService.setDefaultLang('en');
  }

  showMenu: boolean = true;
  toogleList() {
    this.showMenu = !this.showMenu;
  }
}
