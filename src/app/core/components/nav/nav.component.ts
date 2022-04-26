import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit {
  constructor(
    private versionService: VersionService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.cd.detach();
  }
  public increment(): void {
    this.versionService.increment();
  }
  check() {
    console.log('CD NAV');
  }
}
