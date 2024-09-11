import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-cardlist',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cardlist.component.html',
  styleUrl: './cardlist.component.css'
})
export class CardlistComponent {
  products:any;

  constructor(private productservises:ProductsService) {}
  ngOnInit(){
    this.productservises.getproducts().subscribe((res:any)=>{
      this.products = res.products;
    })
  }
}
