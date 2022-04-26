import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';
import { tryAddOrderAction } from '../../store/actions/orders.actions';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  public action(order: Order): void {
    this.store.dispatch(tryAddOrderAction({ order }));
  }
}
