import { Component, Input } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { RateComponent } from "../rate/rate.component";
import { CounterService } from '../services/counter.service';
import { CarditemsService } from '../services/carditems.service';
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
  selector: 'app-card',
  standalone: true,
  imports: [NgbRatingModule, RateComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  counter:any;
@Input () product:Product = {
  id: 0,
  name: '',
  title: '',
  stock: 0,
  category: '',
  description: '',
  price: 0,
  rating: 0,
  images: '',
}
navigateToDetails(id: number) {
  window.location.href = `/carddetails/${id}`;
}
constructor(private cartrequest:CarditemsService, private counterServices:CounterService) {

}
ngOnInit() {
  this.counterServices.getCounter().subscribe((res:any)=>{
    this.counter = res;
  })
}
adding(){
  this.cartrequest.add(this.product);
    this.counterServices.setCounter(this.counter + 1);
}
}