import { Component } from '@angular/core';
import order from './orders.json';
interface Order{
  name: string;
  orders:object;
  total: string;
}
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent {
  orders: Order[] =order; 
}
