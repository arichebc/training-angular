import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {
  public open = true;
  public list1 = [
    { name: 'chris', job: 'dev' },
    { name: 'juju', job: 'dev' },
  ];
  public list2 = [
    { name: 'david', job: 'designer' },
    { name: 'christian', job: 'designer' },
  ];
  constructor() {}

  ngOnInit(): void {}
  public toggle(): void {
    this.open = !this.open;
  }
}
