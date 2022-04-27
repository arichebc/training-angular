import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { selectRouteParam } from 'src/app/store/reducer/router.reducer';
import { ClientsService } from '../../services/clients.service';
import * as clientsActions from '../actions/clients.actions';

@Injectable()
export class ClientsEffects {
  constructor(
    private store: Store,
    private clientsService: ClientsService,
    private actions$: Actions,
    private router: Router
  ) {}

  getAllClientsEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(clientsActions.tryGetAllClientsAction),
      switchMap(() => {
        return this.clientsService.collection.pipe(
          map((clients: Client[]) =>
            clientsActions.getAllClientsSuccessAction({ clients })
          ),
          catchError((error) =>
            of(clientsActions.errorClientsAction({ error }))
          )
        );
      })
    );
  });

  // add client
  addClientEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(clientsActions.tryAddClientAction),
      switchMap(({ client }: { client: Client }) => {
        return this.clientsService.add(client).pipe(
          map((client: Client) =>
            clientsActions.addClientSuccessAction({ client })
          ),
          tap(() => this.router.navigate(['clients'])),
          catchError((error) =>
            of(clientsActions.errorClientsAction({ error }))
          )
        );
      })
    );
  });

  // get client by id
  getClientEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(clientsActions.tryGetClientByIdAction),
      switchMap(({ id }: { id: number }) => {
        return this.clientsService.getItemById(id).pipe(
          map((client: Client) =>
            clientsActions.getClientByIdSuccessAction({ client })
          ),
          catchError((error) =>
            of(clientsActions.errorClientsAction({ error }))
          )
        );
      })
    );
  });

  // get client by id
  updateClientEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(clientsActions.tryUpdateClientAction),
      switchMap(({ client }: { client: Client }) => {
        return this.clientsService.update(client).pipe(
          map((client: Client) =>
            clientsActions.updateClientSuccessAction({ client })
          ),
          tap(() => this.router.navigate(['clients'])),
          catchError((error) =>
            of(clientsActions.errorClientsAction({ error }))
          )
        );
      })
    );
  });

  // change state of client
  changeStateEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(clientsActions.tryChangeStateClientAction),
      switchMap(({ client, state }: { client: Client; state: StateClient }) => {
        return this.clientsService.changeState(client, state).pipe(
          map((client: Client) =>
            clientsActions.updateClientSuccessAction({ client })
          ),
          catchError((error) =>
            of(clientsActions.errorClientsAction({ error }))
          )
        );
      })
    );
  });

  // delete client
  deleteClientEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(clientsActions.tryDeleteClientAction),
      switchMap(({ id }: { id: number }) => {
        return this.clientsService.delete(id).pipe(
          map(() => clientsActions.deleteClientSuccessAction({ id })),
          catchError((error) =>
            of(clientsActions.errorClientsAction({ error }))
          )
        );
      })
    );
  });

  // id param in route
  editIdChange$ = createEffect(() => {
    return this.store
      .select(selectRouteParam('id'))
      .pipe(
        map((id) =>
          id
            ? clientsActions.tryGetClientByIdAction({ id: Number(id) })
            : clientsActions.errorClientsAction({ error: null })
        )
      );
  });
}
