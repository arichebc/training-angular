import { Component, OnInit } from '@angular/core';
import { SignIn } from 'src/app/core/models/sign-in';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.scss'],
})
export class PageSignInComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  public action(item: SignIn): void {}
}
