import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translate: TranslateService) { }

  initialize() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

  getTranslation(key: string): string {
    return this.translate.instant(key);
  }
}
