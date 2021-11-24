import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/orders/services/orders.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {}
}
