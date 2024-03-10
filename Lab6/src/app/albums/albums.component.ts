import {Component, Input} from '@angular/core';
import {RouterModule, RouterOutlet} from "@angular/router";
import {AlbumDetailComponent} from "./album-detail/album-detail.component";
// @ts-ignore
import albums from "./albums.json";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    RouterOutlet,
    AlbumDetailComponent,
    RouterModule,
    CommonModule
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  @Input() page: number = 1;
  albums = [...albums]

  changePage(page: number){
    this.page = page;
  }
}
