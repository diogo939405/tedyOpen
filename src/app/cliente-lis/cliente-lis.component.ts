import { Component } from '@angular/core';
import { Cliente } from '../cliente.interface';
import { ClienteService } from '../cliente.service';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-cliente-lis',
  templateUrl: './cliente-lis.component.html',
  styleUrls: ['./cliente-lis.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ClienteLisComponent {
  clientes: Cliente[] = [];
  loading: boolean = true;
  visible = false;

  constructor(
    private readonly clienteService: ClienteService, private confirmationService: ConfirmationService, private messageService: MessageService
  ) { }



  ngOnInit(): void {
    this.carregarParceiros();
  }

  carregarParceiros() {
    this.clienteService.recuperarClientes().subscribe((response: Cliente[]) => {
      console.log(response, 'res');
      this.clientes = response
      this.loading = false;
    })

    this.clienteService.recuperarClientesPorId('62').subscribe((response: any[]) => {
      console.log(response, 'res por id');
    })
  }

  clear(table: Table) {
    table.clear();
  }

  editarParceiro(cliente: Cliente) {
    console.log('editar parceiro')
    this.clienteService.clienteAtual = cliente
    this.showDialog();
  }


  excluirParceiro(event: Event, cliente: Cliente) {
    console.log('excluir parceiro')
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Confirma a exclusão do parceiro?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.clienteService.excluirClientesPorId(cliente.id).subscribe((response: any) => {
          console.log(response, 'response');
          this.messageService.add({ severity: 'info', summary: 'Excluido', detail: 'Parceiro Excluído', life: 3000 });
          this.carregarParceiros();
        })

      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'Exclusão cancelada', life: 3000 });
      }
    });
  }

  showDialog() {
    this.visible = true;
  }

}
