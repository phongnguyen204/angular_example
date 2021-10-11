import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',

})
export class CartHeaderComponent {
  constructor() {
    this.numberItems = 0;
  }

  @Input() numberItems: number;

}
