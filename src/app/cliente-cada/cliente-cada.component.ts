import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.interface';

@Component({
  selector: 'app-cliente-cada',
  templateUrl: './cliente-cada.component.html',
  styleUrls: ['./cliente-cada.component.css']
})
export class ClienteCadaComponent {
  constructor(public readonly clienteService: ClienteService) {
    console.log(clienteService.clienteAtual)
  }

  atualizar() {
    //TODO Colocar o close Dialog
    this.clienteService.clienteAtual.lastSubmit = Date.now().toString();
    this.clienteService.atualizarClientes(this.clienteService.clienteAtual, this.clienteService.clienteAtual.id).subscribe((response: Cliente[]) => {
      console.log(response, 'res');
    })
  }
}
