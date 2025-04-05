import { Component } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-logi',
  imports: [ReactiveFormsModule, InputTextModule,RouterModule, FloatLabelModule, ButtonModule],
  templateUrl: './logi.component.html',
  styleUrl: './logi.component.scss'
})
export class LogiComponent {
  loginForm = new UntypedFormGroup({
    username: new UntypedFormControl(''),
    password: new UntypedFormControl(''),
  })
  constructor(private authService: AuthenticationService, private router: Router) { }

  login() {
    // Implement login logic here
    this.authService.loginWithCredentials(this.loginForm.value.username, this.loginForm.value.password).subscribe({
      next: (res) => {
        this.router.navigate(['/admin']);
      },
      error: (err) => {
        console.error('Login failed', err);
      }
    });
  }

}
