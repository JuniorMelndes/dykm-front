import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],  // Adicionando o HttpClientModule aos imports
  template: '<router-outlet></router-outlet>',  // Exibindo o RouterOutlet
})
export class AppComponent {}
