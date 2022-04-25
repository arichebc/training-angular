import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { VersionService } from 'src/app/core/services/version.service';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  public title = 'List Client';
  public headers: string[];
  public collection$!: Subject<Client[]>;
  public version$!: Subject<number>;
  constructor(
    private clientsService: ClientsService,
    private versionService: VersionService,
    private router: Router
  ) {
    this.headers = [
      'Action',
      'Name',
      'Total CA HT',
      'Tva',
      'Total TTC',
      'State',
    ];
    this.collection$ = this.clientsService.collection;
    this.version$ = this.versionService.version;
  }
  ngOnInit(): void {}

  public goToEdit(id: number): void {
    this.router.navigate(['clients', 'edit', id]);
  }
  public deleteItem(id: number): void {
    this.clientsService.delete(id).subscribe();
  }
}
