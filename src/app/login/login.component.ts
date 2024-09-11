import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 data={
   email:'',
  password:'',
}
  submitted = false;
 submit(form:any){
    console.log(form);
   console.log(this.data);
   this.submitted=true;
 }
}

