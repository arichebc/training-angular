import { createReducer, on } from '@ngrx/store';
import { Order } from 'src/app/core/models/order';
import * as ordersActions from '../actions/orders.actions';

export interface OrdersState {
  orders: Order[];
  error: any;
  selectedOrder: Order | null;
}

export const initialOrderState: OrdersState = {
  orders: [],
  error: null,
  selectedOrder: null,
};

export const ordersFeatureKey = 'orders';

export const ordersReducer = createReducer(
  initialOrderState,
  on(
    ordersActions.getAllOrdersSuccessAction,
    (state: OrdersState, { orders }: { orders: Order[] }): OrdersState => {
      return {
        ...state,
        orders,
      };
    }
  ),
  on(
    ordersActions.errorOrdersAction,
    (state: OrdersState, { error }: { error: any }): OrdersState => {
      return {
        ...state,
        error,
      };
    }
  ),
  on(
    ordersActions.addOrderSuccessAction,
    (state: OrdersState, { order }: { order: Order }): OrdersState => {
      return {
        ...state,
        orders: [...state.orders, order],
      };
    }
  ),
  on(
    ordersActions.getOrderByIdSuccessAction,
    (state: OrdersState, { order }: { order: Order }): OrdersState => {
      return {
        ...state,
        selectedOrder: order,
      };
    }
  ),
  on(
    ordersActions.updateOrderSuccessAction,
    (state: OrdersState, { order }: { order: Order }): OrdersState => {
      return {
        ...state,
        orders: state.orders.map((orderState: Order) =>
          orderState.id !== order.id ? orderState : order
        ),
      };
    }
  ),
  on(
    ordersActions.deleteOrderSuccessAction,
    (state: OrdersState, { id }: { id: number }): OrdersState => {
      return {
        ...state,
        orders: state.orders.filter(
          (orderState: Order) => orderState.id !== id
        ),
      };
    }
  )
);
