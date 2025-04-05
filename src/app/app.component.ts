import { Component } from '@angular/core';
import { LogiComponent } from './Components/logi/logi.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ LogiComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-fire7';
}
