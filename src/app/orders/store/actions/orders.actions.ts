import { createAction, props } from '@ngrx/store';
import { Order } from 'src/app/core/models/order';

export const tryGetAllOrdersAction = createAction(
  '[Orders] try get all orders'
);

export const getAllOrdersSuccessAction = createAction(
  '[Orders] get all orders success',
  props<{ orders: Order[] }>()
);

export const getAllOrdersErrorAction = createAction(
  '[Orders] get all orders error',
  props<{ error: any }>()
);
