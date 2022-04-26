import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public title = 'crm-nov-bis';
  @HostListener('window:scroll')
  onScroll() {
    console.log('scroll');
  }

  check() {
    console.log('CD APP');
  }
}
