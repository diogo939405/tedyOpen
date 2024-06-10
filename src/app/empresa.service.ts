import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Empresa } from './empresa.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  empresaAtual: Empresa;
  visible: boolean = false;
  private readonly API_URL = 'https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners';
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  recuperarEmpresas(): Observable<Empresa[]> {
    return this.httpClient.get<Empresa[]>(this.API_URL);
  }

  recuperarEmpresasPorId(id: string): Observable<Empresa[]> {
    return this.httpClient.get<Empresa[]>(this.API_URL + '/' + id);
  }

  adicionarEmpresas(e: Empresa): Observable<Empresa> {
    return this.httpClient.post<Empresa>(this.API_URL, e);
  }

  atualizarEmpresas(e: Empresa, id: string): Observable<Empresa[]> {
    return this.httpClient.post<Empresa[]>(this.API_URL + '/' + id, e);
  }

  excluirEmpresasPorId(id: number | undefined): Observable<Empresa[]> {
    return this.httpClient.delete<Empresa[]>(this.API_URL + '/' + id);
  }

}
