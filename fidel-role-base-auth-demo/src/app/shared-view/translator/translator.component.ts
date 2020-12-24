import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.scss']
})
export class TranslatorComponent implements OnInit {
  trans_data: any;
  user_name: any;

  welcome_message: any;
  language: string = 'en';

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ja', 'fr'])
    translate.setDefaultLang('en');
    translate.use(this.language);
  }

  ngOnInit(): void {
    this.user_name = window.localStorage.getItem('user_name') || '';
    this.welcome_message = this.translate.instant('welcome', { user_name: this.user_name });
    this.useLanguage();
  }

  useLanguage() {
    console.log(this.language)
    this.translate.use(this.language);

    // this.welcome_message = this.translate.instant('welcome', { user_name: this.user_name });

    this.translate.get(['welcome', 'posts'], { user_name: this.user_name }).subscribe((t) => {
      this.trans_data = t['posts'];
      this.welcome_message = t['welcome']
      console.log(this.trans_data)
    })

  }

}
