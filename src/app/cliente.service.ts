import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Cliente } from './cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private readonly API_URL = 'https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies';
  clienteAtual: Cliente
  constructor(
    private readonly httpClient: HttpClient
  ) { }


  recuperarClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.API_URL);
  }

  recuperarClientesPorId(id: string): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.API_URL + '/' + id);
  }

  adicionarClientes(e: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.API_URL, e);
  }

  atualizarClientes(e: Cliente, id: string): Observable<Cliente[]> {
    console.log(e, id)
    return this.httpClient.put<Cliente[]>(this.API_URL + '/' + id, e);
  }

  excluirClientesPorId(id: string): Observable<Cliente[]> {
    return this.httpClient.delete<Cliente[]>(this.API_URL + '/' + id);
  }

}


