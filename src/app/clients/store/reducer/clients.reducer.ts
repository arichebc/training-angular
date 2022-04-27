import { createReducer, on } from '@ngrx/store';
import { Client } from 'src/app/core/models/client';
import * as clientsActions from '../actions/clients.actions';

export interface ClientsState {
  clients: Client[];
  error: any;
  selectedClient: Client | null;
}

export const initialClientState: ClientsState = {
  clients: [],
  error: null,
  selectedClient: null,
};

export const clientsFeatureKey = 'clients';

export const clientsReducer = createReducer(
  initialClientState,
  on(
    clientsActions.getAllClientsSuccessAction,
    (state: ClientsState, { clients }: { clients: Client[] }): ClientsState => {
      return {
        ...state,
        clients,
      };
    }
  ),
  on(
    clientsActions.errorClientsAction,
    (state: ClientsState, { error }: { error: any }): ClientsState => {
      return {
        ...state,
        error,
      };
    }
  ),
  on(
    clientsActions.addClientSuccessAction,
    (state: ClientsState, { client }: { client: Client }): ClientsState => {
      return {
        ...state,
        clients: [...state.clients, client],
      };
    }
  ),
  on(
    clientsActions.getClientByIdSuccessAction,
    (state: ClientsState, { client }: { client: Client }): ClientsState => {
      return {
        ...state,
        selectedClient: client,
      };
    }
  ),
  on(
    clientsActions.updateClientSuccessAction,
    (state: ClientsState, { client }: { client: Client }): ClientsState => {
      return {
        ...state,
        clients: state.clients.map((clientState: Client) =>
          clientState.id !== client.id ? clientState : client
        ),
      };
    }
  ),
  on(
    clientsActions.deleteClientSuccessAction,
    (state: ClientsState, { id }: { id: number }): ClientsState => {
      return {
        ...state,
        clients: state.clients.filter(
          (clientState: Client) => clientState.id !== id
        ),
      };
    }
  )
);
