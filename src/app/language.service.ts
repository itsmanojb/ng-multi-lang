import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private siteLanguage = new BehaviorSubject('en');
  currentLang = this.siteLanguage.asObservable();

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  changeLanguage(lang: string) {
    this.document.documentElement.lang = lang;
    this.siteLanguage.next(lang);
  }

}
