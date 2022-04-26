import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { VersionService } from 'src/app/core/services/version.service';
import { OrdersService } from '../../services/orders.service';

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
  public collection$!: Subject<Order[]>;
  // public collection!: Order[];
  public version$!: Subject<number>;

  constructor(
    private ordersService: OrdersService,
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
    this.collection$ = this.ordersService.collection;
    // this.ordersService.collection.subscribe((data) => {
    //   this.collection = data;
    //   this.cd.detectChanges();
    // });
    this.version$ = this.versionService.version;
  }
  ngOnInit(): void {}
  public changeState(item: Order, event: Event): void {
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateOrder;
    this.ordersService.changeState(item, state).subscribe((data) => {
      Object.assign(item, data);
    });
  }

  public goToEdit(id: number): void {
    this.router.navigate(['orders', 'edit', id]);
  }
  public deleteItem(id: number): void {
    this.ordersService.delete(id).subscribe();
  }

  check() {
    console.log('CD PG LIST ORDERS');
  }
}
