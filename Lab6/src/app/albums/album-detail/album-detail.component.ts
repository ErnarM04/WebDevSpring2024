import {Component, Input} from '@angular/core';
// @ts-ignore
import albums from "../albums.json";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  @Input() page = 1;
  albums = [...albums];
}
