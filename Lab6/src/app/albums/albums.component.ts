import {Component, Input} from '@angular/core';
import {RouterModule, RouterOutlet} from "@angular/router";
import {AlbumDetailComponent} from "../album-detail/album-detail.component";
// @ts-ignore
import {Album} from "../albums";
import {CommonModule} from "@angular/common";
import {AlbumsService} from "../albums.service";


@Component({
  selector: 'app-albums',
  imports: [
    RouterOutlet,
    AlbumDetailComponent,
    RouterModule,
    CommonModule
  ],
  templateUrl: './albums.component.html',
  standalone: true,
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  @Input() page: number = 1;
  id: number | undefined;
  albums: Album[] | undefined;
  filtered: any[] | undefined;
  onStart = this.pageFilter(this.page);

  constructor(private albumService: AlbumsService) {}

  ngOnInit(){
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    })
  }

 pageFilter(page: number){
    let filteredAlbums: any[] = new Array();
    // @ts-ignore
   for (let i = 0; i < this.albums.length; i++){
      // @ts-ignore
      if (this.albums.at(i).userId === page){
        // @ts-ignore
        filteredAlbums.push(this.albums.at(i));
        console.log(this.page);
      }
    }
    this.filtered = filteredAlbums;
 }

  changePage(page: number){
    this.page = page;
    this.pageFilter(page);
  }

  setData(id: number){
    this.id = id;
    console.log(id);
  }

  erase(id: number){
    // @ts-ignore
    this.albums = this.albums.filter((album) => album.id !== id);
  }
}
