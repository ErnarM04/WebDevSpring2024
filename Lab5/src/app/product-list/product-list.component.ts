import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  share(productName: string, productLink: string) {
    const shareMessage = `Check this phone: ${productName} - ${productLink}`;
    window.location.href = `https://t.me/share/url?url=${encodeURIComponent(shareMessage)}`;
  }

  whatsapp(productName: string, productLink: string) {
    const shareMessage = `Check this phone: ${productName} - ${productLink}`;
    window.location.href = `https://whatsapp.com/share/url?url=${encodeURIComponent(shareMessage)}`;
  }
}
