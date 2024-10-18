import {Component, Input, OnInit} from '@angular/core';
import {RouterModule, RouterOutlet} from "@angular/router";
import {AlbumDetailComponent} from "../album-detail/album-detail.component";
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
export class AlbumsComponent implements OnInit{
  page: number = 1;
  id: number | undefined;
  albums: Album[] = [];
  filtered!: Album[];
  static added: Album[] = [];
  newId = 100;
  news = [...AlbumsComponent.added];

  constructor(private albumService: AlbumsService) {
  }

  ngOnInit(){

    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = [...albums];

    })
    this.filtered = this.pageFilter(this.page);
  }

  pageFilter(page: number) {
    let filteredAlbums: any[] = [];
   for (let i = 0; i < this.albums.length; i++){
     if (this.albums[i].userId === page){
        filteredAlbums.push(this.albums.at(i));
        console.log(this.page);
      }
    }
    return filteredAlbums;
 }

  changePage(page: number){
    this.page = page;
    this.filtered = this.pageFilter(page);
  }

  setData(id: number){
    this.id = id;
    console.log(id);
  }

  erase(id: number){
    this.filtered = this.filtered.filter((album) => album.id !== id);
  }

  eraseNew(id: number){
    AlbumsComponent.added = AlbumsComponent.added.filter((album) => album.id !== id);
    this.news = AlbumsComponent.added;
  }

  getAlbum(id: number){
    return AlbumsComponent.added[id-101];
  }

  addAlbum(){
    const input = (<HTMLInputElement>document.getElementById("new-title"));
    const text = input.value.trim();
    this.newId++;
    let album: Album = {
      id: this.newId++,
      userId: 0,
      title: text,
      };
    input.value = '';
    AlbumsComponent.added.push(album);
    this.news = [...AlbumsComponent.added];
    console.log("45645");
  }

  protected readonly AlbumDetailComponent = AlbumDetailComponent;
}
