import { Component } from '@angular/core';
import { Empresa } from '../empresa.interface';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-empresa-cada',
  templateUrl: './empresa-cada.component.html',
  styleUrls: ['./empresa-cada.component.css']
})
export class EmpresaCadaComponent {
  constructor(private empresaService: EmpresaService) { }
  empresa: Empresa = {
    "createdAt": new Date(),
    "clients": [],
    "description": '',
    "name": '',
    "projects": [],
    "repositoryGit": '',
    "urlDoc": '',
  }

  gravar() {
    console.log('gravar empresa', this.empresa);
    this.empresaService.adicionarEmpresas(this.empresa).subscribe((response: any) => {
      console.log(response, 'res por id');
    });
  }

}
