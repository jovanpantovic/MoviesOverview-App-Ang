import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMsg = '';
  isSignedIn = false;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) {}

  ngOnInit() {
    if (localStorage.getItem('user') !== null) this.isSignedIn = true;
    else this.isSignedIn = false;
  }

  async onSignin(email: string, password: string) {
    this.errorMsg = '';
    await this.firebaseService
      .signin(email, password)
      .then(() => {
        if (this.firebaseService.isLoggedIn) {
          this.isSignedIn = true;
          alert('HTTP status code 200');
          this.router.navigate(['/movies']);
        }
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
          case 'auth/wrong-password':
          case 'auth/user-not-found': {
            this.errorMsg = 'Wrong email address or password.';
            break;
          }
          default: {
            this.errorMsg = 'Unexpected Error';
            break;
          }
        }
        alert(this.errorMsg);
      });
  }

  backToRegister() {
    this.router.navigate(['/register'])
  }
}
