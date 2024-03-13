import { Component } from '@angular/core';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductItemComponent } from "./product-list/product-item/product-item.component";
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, ProductItemComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  category: string = 'All'
  title = 'My Store';
  protected readonly ProductListComponent = ProductListComponent;
  setCategory(category: string){
    this.category = category;
  }
}


