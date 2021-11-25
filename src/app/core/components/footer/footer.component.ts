import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public version$: Subject<number>;
  constructor(private versionService: VersionService) {
    this.version$ = this.versionService.version;
  }

  ngOnInit(): void {}
}
