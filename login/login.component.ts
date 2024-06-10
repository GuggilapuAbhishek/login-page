import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  passwordInvalid: boolean = false;

  constructor(private router: Router) {}

  userloginhere() {
    console.log('Login attempt with username:', this.username, 'and password:', this.password);
    if (this.username === 'Abhi' && this.password === '12345') {
      console.log('Login successful');
      
      this.errorMessage = '';
      this.password = '';
      this.passwordInvalid = false;
      this.router.navigate(['/home']);
    } else {
      console.log('Login failed');
      this.password = '';
      this.errorMessage = 'Invalid username or password';
      this.passwordInvalid = true;
    }
  }
}
