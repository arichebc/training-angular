import { createReducer, on } from '@ngrx/store';
import { Order } from 'src/app/core/models/order';
import * as ordersActions from '../actions/orders.actions';

export interface OrdersState {
  orders: Order[];
  error: any;
}

export const initialOrderState: OrdersState = {
  orders: [],
  error: null,
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
  )
);
