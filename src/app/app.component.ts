import { Component, OnInit } from '@angular/core';
import { TranslationService } from './translation.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  
})
export class AppComponent implements OnInit {


  constructor(private translationService: TranslationService) { }

  ngOnInit() {
    this.translationService.initialize();
   /*  this.translateStrings(); */
  }

/*   translateStrings() {
    this.greeting = this.translationService.getTranslation('greeting');
    this.welcomeMessage = this.translationService.getTranslation('welcome');
  } */

  switchLanguage(lang: string) {
    this.translationService.setLanguage(lang);
  /*   this.translateStrings(); */
  }
}
