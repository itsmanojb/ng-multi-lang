import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentLanguage: string;

  constructor(
    private language: LanguageService,
    private translate: TranslateService
  ) {
    const lang = localStorage.getItem('lang') || 'en';
    this.translate.setDefaultLang(lang);
    this.currentLanguage = lang;
    this.language.currentLang.subscribe(lang => {
      if (lang) {
        this.translate.setDefaultLang(lang)
      }
    });
  }

  switchLanguage(e: any) {
    const language = e.target.value;
    localStorage.setItem('lang', language);
    this.language.changeLanguage(language);
  }

}
