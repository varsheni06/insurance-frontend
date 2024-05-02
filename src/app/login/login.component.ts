// import { Component } from '@angular/core';
// import { AuthService } from '../services/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
//   loginForm: any;
//   constructor(private auth: AuthService){}
// type: string ="password";
// istext: boolean=false;
// eyeicon:string="fa-eye-slash";
//   hideshowpass(){
//     this.istext =!this.istext;
//     this.istext? this.eyeicon="fa-eye":this.eyeicon="fa-eye-slash";
//     this.istext? this.type="text":this.type="password";
//   }

//   onLogin(){
//     this.auth.login(this.loginForm.value)
//     .subscribe({
//       next:(res)=>{
//         alert(res.message)
//       },
//       error:(err)=>{
//         alert(err.error.message)
//       }

//     })
//   }

// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup; // Add ! to tell TypeScript that it will be initialized in the constructor
  type: string = "password";
  istext: boolean = false;
  eyeicon: string = "fa-eye-slash";

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    // Initialize the form in the constructor
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Add validation for email
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  hideshowpass() {
    this.istext = !this.istext;
    this.istext ? this.eyeicon = "fa-eye" : this.eyeicon = "fa-eye-slash";
    this.istext ? this.type = "text" : this.type = "password";
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value)
        .subscribe({
          next: (res => {
            alert(res.message);
            // Optionally, you can reset the form after successful login
            localStorage.setItem('currentUser', this.loginForm.value.email);
            this.loginForm.reset();
            this.router.navigate(['dashboard']);
          }),
          error: (err => {
            alert(err?.error.message);
          })
        });
    } else {
      // If form is invalid, show error messages or handle accordingly
      alert('Please enter a valid email and password.');
    }
  }
}

