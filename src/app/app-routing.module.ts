import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ServicesComponent} from "./services/services.component";
import {LoginComponent} from "./login/login.component";
import {ExchangeComponent} from "./exchange/exchange.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'exchange',
    component: ExchangeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
