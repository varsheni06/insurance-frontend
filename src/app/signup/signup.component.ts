// import { Component } from '@angular/core';
// import { AuthService } from '../services/auth.service';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrl: './signup.component.css'
// })
// export class SignupComponent {
//   signUpForm: any;
//   constructor(private auth: AuthService){}

//   type: string ="password";
// istext: boolean=false;
// eyeicon:string="fa-eye-slash";
//   hideshowpass(){
//     this.istext =!this.istext;
//     this.istext? this.eyeicon="fa-eye":this.eyeicon="fa-eye-slash";
//     this.istext? this.type="text":this.type="password";

//   }
//   onSignup(){
//     this.auth.signup(this.signUpForm.value)
//     .subscribe({
//       next:(res=>{
//         alert(res.message)
//       }),
//       error:(err=>{
//         alert(err?.error.message)
//       })
//     })
//   }

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  type: string = "password";
  istext: boolean = false;
  eyeicon: string = "fa-eye-slash";

  constructor(private fb: FormBuilder, private auth: AuthService,private router: Router) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      empid: ['', Validators.required],
      companyname: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  hideshowpass() {
    this.istext = !this.istext;
    this.istext ? this.eyeicon = "fa-eye" : this.eyeicon = "fa-eye-slash";
    this.istext ? this.type = "text" : this.type = "password";
  }

  onSignup() {
    if (this.signUpForm.valid) {
      this.auth.signup(this.signUpForm.value)
        .subscribe({
          next: (res => {
            alert(res.message);
            // Optionally, you can reset the form after successful signup
            this.signUpForm.reset();
            this.router.navigate(['login']);
          }),
          error: (err => {
            alert(err?.error.message);
          })
        });
    } else {
      // If form is invalid, show error messages or handle accordingly
      alert('Please fill in all required fields.');
    }
  }
}
