import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
})
export class CartSummaryComponent {
  constructor() {
    this.subTotal = 0;
    this.tax = 0;
    this.discount = 0;
  }

  @Input() subTotal: number;
  @Input() tax: number;
  @Input() discount: number;
}
