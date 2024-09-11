import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray, Validators, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required, Validators.pattern(/^\S*$/)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
      addresses: new FormArray([]) 
    });

    this.registerForm.setValidators(this.passwordsMatch);

    this.addAddress();
  }

  get addresses() {
    return this.registerForm.get('addresses') as FormArray;
  }

  addAddress() {
    const addressGroup = new FormGroup({
      address: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required])
    });
    this.addresses.push(addressGroup);
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  passwordsMatch(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  handleSubmitForm() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value); 
    } else {
       this.registerForm.markAllAsTouched();
      console.error('Form is invalid');
    }
  }
}
