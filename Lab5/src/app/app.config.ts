import {ApplicationConfig, NgModule} from '@angular/core';
import {provideRouter, RouterModule, RouterOutlet} from '@angular/router';

import { routes } from './app.routes';
import {BrowserModule} from "@angular/platform-browser";
import {ProductListComponent} from "./product-list/product-list.component";
import {AppComponent} from "./app.component";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent
  ]
})

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
