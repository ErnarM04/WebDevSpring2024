import {Component, Input} from '@angular/core';
import { products } from "./products";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  products = [...products]
  erased: string[] = []
  @Input() category: string = "All";

  erase(name: string){
    this.products = this.products.filter((product) => product.name !== name);
  }

  like(id: number){
    const product = this.products.find((product) => product.id === id);
    const element = document.getElementsByClassName("like");
    if(product == undefined){
      alert('Something went wrong');
    }
    else{
      product.likeCount = (product?.likeCount ?? 0) + 1;
    }
  }

  contains(name: string): boolean {
    for (let idk in this.erased){
      if(name === idk){
        return true;
      }
    }
    return false;
  }

}
