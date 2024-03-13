import {Component, Input} from '@angular/core';
// @ts-ignore
import albums from "../albums/albums.json";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  // @ts-ignore
  @Input() id: number | undefined;
  albums = [...albums];
  title: string | undefined = this.findTitle();
  page: number | undefined;
  findTitle(): string{
    let on: number = 10;
    // @ts-ignore
    let page: number = (this.id / on);
    console.log(page);
    return page.toString()
  }

  protected readonly history = history;
}
