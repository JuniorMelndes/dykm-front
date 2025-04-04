import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';

  constructor(private router: Router) {}

  submit() {
    if (this.username) {
      this.router.navigate(['/principal'], { state: { username: this.username } });
    } else {
      alert("Por favor, insira um nome de usuário.");
    }
  }
}
