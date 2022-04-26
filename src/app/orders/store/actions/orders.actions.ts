import { createAction, props } from '@ngrx/store';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

// try get all order capted by effect
export const tryGetAllOrdersAction = createAction(
  '[Orders] try get all orders'
);

// get all order capted by reducer
export const getAllOrdersSuccessAction = createAction(
  '[Orders] get all orders success',
  props<{ orders: Order[] }>()
);

// error from api
export const errorOrdersAction = createAction(
  '[Orders] get all orders error',
  props<{ error: any }>()
);

// try add order capted by effect
export const tryAddOrderAction = createAction(
  '[Orders] try add order',
  props<{ order: Order }>()
);

// add order capted by reducer
export const addOrderSuccessAction = createAction(
  '[Orders] add order',
  props<{ order: Order }>()
);

// try update order capted by effect
export const tryUpdateOrderAction = createAction(
  '[Orders] try update order',
  props<{ order: Order }>()
);

// update order capted by reducer
export const updateOrderSuccessAction = createAction(
  '[Orders] update order',
  props<{ order: Order }>()
);

// try change state order capted by effect
export const tryChangeStateOrderAction = createAction(
  '[Orders] change state order',
  props<{ order: Order; state: StateOrder }>()
);

// try delete order capted by effect
export const tryDeleteOrderAction = createAction(
  '[Orders] try delete order',
  props<{ order: Order }>()
);

// update delete capted by reducer
export const deleteOrderSuccessAction = createAction(
  '[Orders] delete order',
  props<{ id: number }>()
);

// update delete capted by effect
export const tryGetOrderByIdAction = createAction(
  '[Orders] try get order by id',
  props<{ id: number }>()
);

// get order by id by reducer
export const getOrderByIdSuccessAction = createAction(
  '[Orders] get order by id',
  props<{ order: Order }>()
);
