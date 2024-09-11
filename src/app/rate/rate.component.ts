import { Component, Input } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-rate',
  standalone: true,
  imports: [NgbRatingModule],
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.css'
})
export class RateComponent {
  @Input () rating:any;
}
// export class RateComponent {
//   @Input() rating: number = 0;
//   stars: number[] = [1, 2, 3, 4, 5];
//
//   setRating(rating: number): void {
//     this.rating = rating;
//   }

