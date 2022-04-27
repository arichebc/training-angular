import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersFacade } from '../../store/facade/orders.facade';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  public item$ = this.facade.order$;
  constructor(private facade: OrdersFacade) {}

  ngOnInit(): void {}

  public action(order: Order): void {
    this.facade.updateOrder(order);
  }
}
