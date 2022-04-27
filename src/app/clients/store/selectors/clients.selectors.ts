import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Client } from 'src/app/core/models/client';
import { clientsFeatureKey, ClientsState } from '../reducer/clients.reducer';

export const selectClientFeature =
  createFeatureSelector<ClientsState>(clientsFeatureKey);

export const selectClients = createSelector(
  selectClientFeature,
  (state: ClientsState): Client[] => state.clients
);

// select client by id
export const selectClientById = createSelector(
  selectClientFeature,
  (state: ClientsState): Client | null => state.selectedClient
);
