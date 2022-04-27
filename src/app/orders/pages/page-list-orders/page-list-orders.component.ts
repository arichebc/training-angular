import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { VersionService } from 'src/app/core/services/version.service';
import { OrdersFacade } from '../../store/facade/orders.facade';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageListOrdersComponent implements OnInit {
  public states = Object.values(StateOrder);
  public title = 'List Orders';
  public headers: string[];
  public collection$ = this.facade.orders$;
  public version$!: Subject<number>;

  constructor(
    private facade: OrdersFacade,
    private versionService: VersionService,
    private router: Router
  ) {
    this.headers = [
      'Action',
      'Type',
      'Client',
      'NbJours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
    ];
    this.version$ = this.versionService.version;
  }
  ngOnInit(): void {
    this.facade.loadOrders();
  }

  public changeState(order: Order, event: Event): void {
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateOrder;
    this.facade.changeState(order, state);
  }

  public goToEdit(id: number): void {
    this.router.navigate(['orders', 'edit', id]);
  }

  public deleteItem(id: number): void {
    this.facade.deleteOrder(id);
  }

  check() {
    console.log('CD PG LIST ORDERS');
  }
}
