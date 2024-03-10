import { Routes } from '@angular/router';
import {AlbumDetailComponent} from "./album-detail/album-detail.component";
import {AlbumPhotosComponent} from "./album-detail/album-photos/album-photos.component";
import {AlbumsComponent} from "./albums.component";

export const routes: Routes = [
  {path: 'albums', component: AlbumsComponent,
  children: [
    {path: `${}`, component: AlbumDetailComponent},
    {path: 'photos', component: AlbumPhotosComponent}
  ]}
];
