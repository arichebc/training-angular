import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import * as ordersAction from '../actions/orders.actions';
import * as ordersSelectors from '../selectors/orders.selectors';

@Injectable({
  providedIn: 'root',
})
export class OrdersFacade {
  constructor(private store: Store) {}

  orders$ = this.store.select(ordersSelectors.selectOrders);
  order$ = this.store.select(ordersSelectors.selectOrderById);

  public loadOrders(): void {
    this.store.dispatch(ordersAction.tryGetAllOrdersAction());
  }

  public addOrder(order: Order): void {
    this.store.dispatch(ordersAction.tryAddOrderAction({ order }));
  }

  public updateOrder(order: Order): void {
    this.store.dispatch(ordersAction.tryUpdateOrderAction({ order }));
  }

  public changeState(order: Order, state: StateOrder): void {
    this.store.dispatch(
      ordersAction.tryChangeStateOrderAction({ order, state })
    );
  }

  public deleteOrder(id: number): void {
    this.store.dispatch(ordersAction.tryDeleteOrderAction({ id }));
  }

  public getOrderById(id: number): void {
    this.store.dispatch(ordersAction.tryGetOrderByIdAction({ id }));
  }
}
