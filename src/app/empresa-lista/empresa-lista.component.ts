import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { Empresa } from '../empresa.interface';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-empresa-lista',
  templateUrl: './empresa-lista.component.html',
  styleUrls: ['./empresa-lista.component.css']
})
export class EmpresaListaComponent implements OnInit {
  private readonly API_URL = 'https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners';
  empresas: Empresa[] = [];
  loading: boolean = true;

  constructor(
    private readonly empresaService: EmpresaService
  ) { }

  ngOnInit(): void {
    this.empresaService.recuperarEmpresas().subscribe((response: Empresa[]) => {
      console.log(response, 'res');
      this.empresas = response
      this.loading = false;
    })

    this.empresaService.recuperarEmpresasPorId('62').subscribe((response: any[]) => {
      console.log(response, 'res por id');
    })
  }

  clear(table: Table) {
    table.clear();
  }

  editarEmpresa(empresa: Empresa) {
    console.log('editar parceiro')
    this.empresaService.empresaAtual = empresa
    this.showDialog();

  }

  excluirEmpresa(event: Event, empresa: Empresa) {
    this.empresaService.excluirEmpresasPorId(empresa.id).subscribe((response: Empresa[]) => {
      console.log(response, 'excluir empresa');
      this.empresas = response;
    })
  }

  showDialog() {
    this.empresaService.visible = true;
  }
}

