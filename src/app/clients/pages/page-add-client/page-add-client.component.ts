import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';
import { ClientsFacade } from '../../store/facade/clients.facade';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss'],
})
export class PageAddClientComponent implements OnInit {
  constructor(private facade: ClientsFacade) {}

  ngOnInit(): void {}

  public action(client: Client): void {
    this.facade.addClient(client);
  }
}
