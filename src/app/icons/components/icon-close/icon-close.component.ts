import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-close',
  templateUrl: './icon-close.component.html',
  styleUrls: ['./icon-close.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCloseComponent implements OnInit {
  public myIcon = faTimes;
  constructor() {}

  ngOnInit(): void {}
  check() {
    console.log('CD ICON CLOSE');
  }
}
