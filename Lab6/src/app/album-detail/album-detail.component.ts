import {Component, Input, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, RouterLink, RouterOutlet} from "@angular/router";
import {AlbumsComponent} from "../albums/albums.component";
import {Album} from "../albums";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NgOptimizedImage],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{

  id!: number;

  protected readonly history = history;

  constructor(private albumSer:AlbumsService, private route: ActivatedRoute) {}
  album!: Album;
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id'].parseInt();
    })
    if(this.id > 100){
      console.log(this.id);
      this.album = AlbumsComponent.added[this.id - 101];
      console.log(this.album.title);
    }
    else {
      this.albumSer.getAlbum(Number(this.id)).subscribe((album) => {
        this.album = album;
      })
    }

  }

  updateTitle(){
    const input = (document.getElementById("newtitle") as HTMLInputElement).value;
    const text = input.toString();
    if (text !== "" || text !== undefined){
      this.album.title = text;
    }
  }

  updateNewTitle(){

  }
}
