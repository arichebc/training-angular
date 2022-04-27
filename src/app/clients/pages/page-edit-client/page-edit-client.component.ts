import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { ClientsFacade } from '../../store/facade/clients.facade';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss'],
})
export class PageEditClientComponent implements OnInit {
  public item$ = this.facade.client$;

  constructor(private facade: ClientsFacade) {}

  ngOnInit(): void {}

  public action(client: Client): void {
    this.facade.updateClient(client);
  }
}
