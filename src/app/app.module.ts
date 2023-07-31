import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import { SearchPipe } from './customer/search.pipe' ;
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CustomerComponent,
    OrdersComponent,
    AboutComponent,
    LoginComponent,
    SearchPipe,
    EditComponent
  ],
  imports: [
    NgxPaginationModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
