import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import * as ordersActions from '../actions/orders.actions';

describe('[action] tryGetAllOrdersAction', () => {
  it('should create a tryGetAllOrdersAction', () => {
    const action = ordersActions.tryGetAllOrdersAction();
    expect(action).toEqual({
      type: '[Orders] try get all orders',
    });
  });
  it('should create a getAllOrdersAction', () => {
    const orders = [
      new Order({
        tjmHt: 1200,
        nbJours: 1,
        tva: 20,
        state: StateOrder.CONFIRMED,
        typePresta: 'coaching',
        client: 'M2i',
        comment: '',
        id: 2,
      }),
    ];
    const action = ordersActions.getAllOrdersSuccessAction({ orders });
    expect(action).toEqual({
      type: '[Orders] get all orders success',
      orders,
    });
  });
});
