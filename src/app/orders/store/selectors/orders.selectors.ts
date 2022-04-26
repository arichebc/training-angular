import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Order } from 'src/app/core/models/order';
import { ordersFeatureKey, OrdersState } from '../reducer/orders.reducer';

export const selectOrdersFeature =
  createFeatureSelector<OrdersState>(ordersFeatureKey);

export const selectOrders = createSelector(
  selectOrdersFeature,
  (state: OrdersState): Order[] => state.orders
);
