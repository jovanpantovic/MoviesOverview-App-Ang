import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMsg = '';
  isSignedIn = false

  constructor(public firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('user') !== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }

  async onSignup(email: string, password: string) {
    this.errorMsg = '';
    await this.firebaseService.signup(email, password)
    .then(() => {
    if(this.firebaseService.isLoggedIn) {
    this.isSignedIn = true
    alert("You have successfully created account!")
    this.router.navigate(['/login'])
  }})
    .catch((error) => {
      this.errorMsg = 'Wrong format email address or empty password. Please enter your email in valid format, and fill the password input.';
      alert(this.errorMsg);
    })
  }

}
