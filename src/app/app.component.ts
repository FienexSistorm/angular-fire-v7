import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogiComponent } from './Components/logi/logi.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-fire7';
}
