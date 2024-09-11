import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

interface Product {
  id: number;
  name: string;
  title: string;
  stock: number;
  category: string;
  description: string;
  price: number;
  rating: number;
  images: string;
}
@Component({
  selector: 'app-carddetails',
  standalone: true,
  imports: [],
  templateUrl: './carddetails.component.html',
  styleUrl: './carddetails.component.css'
})
export class CarddetailsComponent {
  @Input() id:string = '';
  constructor(private actiavtedRoute : ActivatedRoute,private productserves:ProductsService) {
    this.id = this.actiavtedRoute.snapshot.params['id'];
  }
  product: any;
 ngOnInit() {
    this.productserves.getProductDetails(this.id).subscribe((res:any)=>{
      this.product = res;
    })
  }

}
