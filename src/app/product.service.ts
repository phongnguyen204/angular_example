import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      image: './assets/iphon12.jpg',
      price: 5,
      quantity: 2,
    },
    {
      id: 2,
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      image: './assets/iphon13.jpg',
      price: 10,
      quantity: 1,
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  findById(id: number): any {
    return this.products.find(product => product.id === id);
  }

  findIndexById(id: number): number {
    return this.products.findIndex((product) => product.id === id);
  }

  updateQuantity(id: number, quantity: number) {
    const product = this.findById(id);
    if (product) {
      product.quantity = quantity || 0;
    }
  }

  removeProduct(id: number): boolean {
    const index = this.findIndexById(id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }

    return false;
  }
}
