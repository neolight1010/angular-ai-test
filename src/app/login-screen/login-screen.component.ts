// login-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: "./login-screen.component.html",
  imports: [ReactiveFormsModule]
})
export class LoginFormComponent {
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted', this.loginForm.value);
      // Handle form submission
    }
  }

  signInWithGoogle() {
    // Implement Google Sign-In logic here
    console.log('Google sign-in clicked');
  }
}
