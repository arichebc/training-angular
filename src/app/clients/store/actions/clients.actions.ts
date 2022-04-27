import { createAction, props } from '@ngrx/store';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';

// try get all client capted by effect
export const tryGetAllClientsAction = createAction(
  '[Clients] try get all clients'
);

// get all client capted by reducer
export const getAllClientsSuccessAction = createAction(
  '[Clients] get all clients success',
  props<{ clients: Client[] }>()
);

// error from api
export const errorClientsAction = createAction(
  '[Clients] get all clients error',
  props<{ error: any }>()
);

// try add client capted by effect
export const tryAddClientAction = createAction(
  '[Clients] try add client',
  props<{ client: Client }>()
);

// add client capted by reducer
export const addClientSuccessAction = createAction(
  '[Clients] add client',
  props<{ client: Client }>()
);

// try update client capted by effect
export const tryUpdateClientAction = createAction(
  '[Clients] try update client',
  props<{ client: Client }>()
);

// update client capted by reducer
export const updateClientSuccessAction = createAction(
  '[Clients] update client',
  props<{ client: Client }>()
);

// try change state client capted by effect
export const tryChangeStateClientAction = createAction(
  '[Clients] change state client',
  props<{ client: Client; state: StateClient }>()
);

// try delete client capted by effect
export const tryDeleteClientAction = createAction(
  '[Clients] try delete client',
  props<{ id: number }>()
);

// update delete capted by reducer
export const deleteClientSuccessAction = createAction(
  '[Clients] delete client',
  props<{ id: number }>()
);

// update delete capted by effect
export const tryGetClientByIdAction = createAction(
  '[Clients] try get client by id',
  props<{ id: number }>()
);

// get client by id by reducer
export const getClientByIdSuccessAction = createAction(
  '[Clients] get client by id',
  props<{ client: Client }>()
);
