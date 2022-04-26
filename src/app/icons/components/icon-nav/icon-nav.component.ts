import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-icon-nav',
  templateUrl: './icon-nav.component.html',
  styleUrls: ['./icon-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconNavComponent implements OnInit {
  public myIcon = faBars;
  constructor() {}

  ngOnInit(): void {}
  check() {
    console.log('CD ICON NAV');
  }
}
