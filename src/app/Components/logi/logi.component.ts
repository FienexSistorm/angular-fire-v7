import { Component, inject, model } from '@angular/core';
import { Auth, User, user } from '@angular/fire/auth';
import { AuthenticationService } from '../../Services/authentication.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-logi',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './logi.component.html',
  styleUrl: './logi.component.scss'
})
export class LogiComponent {
  username = model('');
  password = model('');
  constructor(private authService: AuthenticationService) { }

  login() {
    // Implement login logic here
    console.log('Login clicked', this.username(), this.password());
    this.authService.loginWithCredentials(this.username(), this.password()).subscribe({
      next: (res) => {
        console.log('Login successful', res);
      },
      error: (err) => {
        console.error('Login failed', err);
      }
    });
  }

}
