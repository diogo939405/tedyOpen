import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  logedIn: boolean = true;

  auth(usuario: string, senha: string): void {
    this.logedIn = (usuario.length > 0 && senha.length > 0);
  }
}
