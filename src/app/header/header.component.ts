import { Component } from '@angular/core';
import { RouterLink ,RouterLinkActive } from '@angular/router';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  counter:any;
  constructor(private counterservice:CounterService) {
  }

  ngOnInit() {
    this.counterservice.getCounter().subscribe((res:any)=>{
      this.counter = res;
    })
  }

}
