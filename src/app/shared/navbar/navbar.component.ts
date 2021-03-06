import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {}

  changeLang(lang: string) {
    console.log(lang);
    this.translate.use(lang);
  }

}
