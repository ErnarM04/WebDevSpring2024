import { Component } from '@angular/core';
import {AlbumsService} from "../albums.service";
import {ActivatedRoute} from "@angular/router";
import {Album, Images} from "../albums";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  id!: number;
  constructor(private albumSer:AlbumsService, private route: ActivatedRoute) {}
  images!: Images[];
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.albumSer.getImages(Number(this.id)).subscribe((images) => {
      this.images = images;
    })
  }

  openPic(url: string){
    window.location.href=url;
  }
}
