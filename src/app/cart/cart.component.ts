import { Component } from '@angular/core';
import { CarditemsService } from '../services/carditems.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartitems:any[] = [];
  counter:any;
  value:any;
  constructor(private CartService : CarditemsService,private counterservice: CounterService) {
  }

  ngOnInit() {
    this.cartitems = this.CartService.getCartItems();
    this.counterservice.getCounter().subscribe((res:any)=>{
      this.counter = res;
    })
  }
  remove(item:any) {
    const index = this.cartitems.indexOf(item);
    if (index !== -1) {
      this.cartitems.splice(index, 1);
      this.counterservice.setCounter(this.counter-1);
    }
  }
  increase(item:any){
    this.counterservice.setCounter(this.counter+1);
  }
  decrease(item:any){

    this.counterservice.setCounter(this.counter-1);
  }
}

