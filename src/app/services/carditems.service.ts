import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarditemsService {
  private cartItems: any[] = [];
  constructor() { }
  
  add(item: any) {
    this.cartItems.push(item);
  }
  getCartItems() {
    return this.cartItems;
  }
  
}
