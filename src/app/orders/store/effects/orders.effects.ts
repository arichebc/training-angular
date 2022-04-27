import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { selectRouteParam } from 'src/app/store/reducer/router.reducer';
import { OrdersService } from '../../services/orders.service';
import * as ordersActions from '../actions/orders.actions';

@Injectable()
export class OrdersEffects {
  constructor(
    private store: Store,
    private ordersService: OrdersService,
    private actions$: Actions,
    private router: Router
  ) {}

  getAllOrdersEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ordersActions.tryGetAllOrdersAction),
      switchMap(() => {
        return this.ordersService.collection.pipe(
          map((orders: Order[]) =>
            ordersActions.getAllOrdersSuccessAction({ orders })
          ),
          catchError((error) => of(ordersActions.errorOrdersAction({ error })))
        );
      })
    );
  });

  // add order
  addOrderEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ordersActions.tryAddOrderAction),
      switchMap(({ order }: { order: Order }) => {
        return this.ordersService.add(order).pipe(
          map((order: Order) => ordersActions.addOrderSuccessAction({ order })),
          tap(() => this.router.navigate(['orders'])),
          catchError((error) => of(ordersActions.errorOrdersAction({ error })))
        );
      })
    );
  });

  // get order by id
  getOrderEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ordersActions.tryGetOrderByIdAction),
      switchMap(({ id }: { id: number }) => {
        return this.ordersService.getItemById(id).pipe(
          map((order: Order) =>
            ordersActions.getOrderByIdSuccessAction({ order })
          ),
          catchError((error) => of(ordersActions.errorOrdersAction({ error })))
        );
      })
    );
  });

  // get order by id
  updateOrderEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ordersActions.tryUpdateOrderAction),
      switchMap(({ order }: { order: Order }) => {
        return this.ordersService.update(order).pipe(
          map((order: Order) =>
            ordersActions.updateOrderSuccessAction({ order })
          ),
          tap(() => this.router.navigate(['orders'])),
          catchError((error) => of(ordersActions.errorOrdersAction({ error })))
        );
      })
    );
  });

  // change state of order
  changeStateEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ordersActions.tryChangeStateOrderAction),
      switchMap(({ order, state }: { order: Order; state: StateOrder }) => {
        return this.ordersService.changeState(order, state).pipe(
          map((order: Order) =>
            ordersActions.updateOrderSuccessAction({ order })
          ),
          catchError((error) => of(ordersActions.errorOrdersAction({ error })))
        );
      })
    );
  });

  // delete order
  deleteOrderEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ordersActions.tryDeleteOrderAction),
      switchMap(({ id }: { id: number }) => {
        return this.ordersService.delete(id).pipe(
          map(() => ordersActions.deleteOrderSuccessAction({ id })),
          catchError((error) => of(ordersActions.errorOrdersAction({ error })))
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
            ? ordersActions.tryGetOrderByIdAction({ id: Number(id) })
            : ordersActions.errorOrdersAction({ error: null })
        )
      );
  });

  // get orders by filter
  getOrdersByFilterEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ordersActions.tryGetOrderClientAction),
      switchMap(({ expression }: { expression: string }) => {
        return this.ordersService.getItemsBySearch(expression).pipe(
          map((orders: Order[]) =>
            ordersActions.getAllOrdersSuccessAction({ orders })
          ),
          catchError((error) => of(ordersActions.errorOrdersAction({ error })))
        );
      })
    );
  });
}
