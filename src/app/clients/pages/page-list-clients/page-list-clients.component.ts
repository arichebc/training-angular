import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { VersionService } from 'src/app/core/services/version.service';
import { ClientsFacade } from '../../store/facade/clients.facade';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  public states = Object.values(StateClient);
  public title = 'List Client';
  public headers: string[];
  public collection$ = this.facade.clients$;
  public version$!: Subject<number>;

  constructor(
    private facade: ClientsFacade,
    private router: Router,
    private versionService: VersionService
  ) {
    this.headers = [
      'Actions',
      'Name',
      'Total CA HT',
      'Tva',
      'Total TTC',
      'State',
    ];
    this.version$ = this.versionService.version;
  }

  ngOnInit(): void {
    this.facade.loadClients();
  }

  public changeState(client: Client, event: Event): void {
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateClient;
    this.facade.changeState(client, state);
  }

  public goToEdit(id: number): void {
    this.router.navigate(['clients', 'edit', id]);
  }

  public deleteItem(id: number): void {
    this.facade.deleteClient(id);
  }
}
