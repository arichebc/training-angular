import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';
import * as ordersActions from '../actions/orders.actions';

export class OrdersEffects {
  constructor(
    private store: Store,
    private ordersService: OrdersService,
    private actions$: Actions
  ) {}

  getAllOrdersEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ordersActions.tryGetAllOrdersAction),
      switchMap(() => {
        return this.ordersService.collection.pipe(
          map((orders: Order[]) =>
            ordersActions.getAllOrdersSuccessAction({ orders })
          ),
          catchError((error) =>
            of(ordersActions.getAllOrdersErrorAction({ error }))
          )
        );
      })
    );
  });
}
