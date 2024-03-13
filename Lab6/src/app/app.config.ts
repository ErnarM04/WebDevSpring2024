import {ApplicationConfig, NgModule} from '@angular/core';
import {provideRouter, RouterModule} from '@angular/router';

import { routes } from './app.routes';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {AlbumDetailComponent} from "./album-detail/album-detail.component";
import {AlbumPhotosComponent} from "./album-photos/album-photos.component";
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AlbumDetailComponent,
    AlbumPhotosComponent
  ],
  imports: [RouterModule.forRoot(routes),
  RouterModule],
  exports: [RouterModule]
})
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
