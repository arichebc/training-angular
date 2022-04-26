import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';
import { tryUpdateOrderAction } from '../../store/actions/orders.actions';
import { selectOrderById } from '../../store/selectors/orders.selectors';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  public item$ = this.store.select(selectOrderById);
  constructor(private store: Store) {}

  ngOnInit(): void {}

  public action(order: Order): void {
    this.store.dispatch(tryUpdateOrderAction({ order }));
  }
}
