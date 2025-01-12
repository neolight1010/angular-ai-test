// login-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: "./login-screen.component.html",
})
export class LoginFormComponent {
  fromGroup: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.fromGroup = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.fromGroup.valid) {
      console.log('Form submitted', this.fromGroup.value);
      // Handle form submission
    }
  }

  signInWithGoogle() {
    // Implement Google Sign-In logic here
    console.log('Google sign-in clicked');
  }
}
