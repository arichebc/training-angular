import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import * as clientsActions from '../actions/clients.actions';
import * as clientsSelectors from '../selectors/clients.selectors';

@Injectable({
  providedIn: 'root',
})
export class ClientsFacade {
  constructor(private store: Store) {}

  clients$ = this.store.select(clientsSelectors.selectClients);
  client$ = this.store.select(clientsSelectors.selectClientById);

  public loadClients(): void {
    this.store.dispatch(clientsActions.tryGetAllClientsAction());
  }

  public addClient(client: Client): void {
    this.store.dispatch(clientsActions.tryAddClientAction({ client }));
  }

  public updateClient(client: Client): void {
    this.store.dispatch(clientsActions.tryUpdateClientAction({ client }));
  }

  public changeState(client: Client, state: StateClient): void {
    this.store.dispatch(
      clientsActions.tryChangeStateClientAction({ client, state })
    );
  }

  public deleteClient(id: number): void {
    this.store.dispatch(clientsActions.tryDeleteClientAction({ id }));
  }

  public getClientById(id: number): void {
    this.store.dispatch(clientsActions.tryGetClientByIdAction({ id }));
  }
}
