import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  { path: 'Customer', component: CustomerComponent },
  { path: 'Orders', component: OrdersComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Login', component: LoginComponent },
  {path:'Edit/:id',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
