import {Component, Input} from '@angular/core';
import {ProductItemComponent} from "./product-item/product-item.component";

@Component({
  selector: 'app-product-list',
  imports: [
    ProductItemComponent
  ],
  templateUrl: './product-list.component.html',
  standalone: true,
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() category: string = "All";
  categorys(category: String){

  }
}
