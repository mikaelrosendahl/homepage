import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private translateService: TranslateService) {
    // Set the default language
    this.currentLanguage = this.translateService.currentLang;
    this.translateService.setDefaultLang('en');
  }

    // Define the changePage() method here
    changePage(): void {
      // Use the router to navigate to a particular page
      this.router.navigate(['/learn']);
    }
  showMenu: boolean = true;
  toogleList() {
    this.showMenu = !this.showMenu;
  }

 

}
