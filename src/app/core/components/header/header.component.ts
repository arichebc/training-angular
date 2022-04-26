import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public version$: Subject<number>;
  public user$!: Subject<User | null>;
  constructor(
    private versionService: VersionService,
    private authService: AuthService
  ) {
    this.version$ = this.versionService.version;
    this.user$ = this.authService.user$;
  }

  ngOnInit(): void {}
  public signOut(): void {
    this.authService.signOut();
  }
  check() {
    console.log('CD HEADER');
  }
}
