import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = '';
  senha = '';
  constructor(private authService: AuthService, private router: Router) { }

  logar() {
    console.log(this.usuario, this.senha);
    this.router.navigate(['/inicio']);
    return '';
  }
}
