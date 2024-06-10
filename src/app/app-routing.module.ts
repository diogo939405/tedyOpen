import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ClienteCadaComponent } from './cliente-cada/cliente-cada.component';
import { ClienteLisComponent } from './cliente-lis/cliente-lis.component';
import { EmpresaCadaComponent } from './empresa-cada/empresa-cada.component';
import { EmpresaListaComponent } from './empresa-lista/empresa-lista.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard] },
  { path: 'empresa/cadastro', component: EmpresaCadaComponent, canActivate: [AuthGuard] },
  { path: 'empresa/lista', component: EmpresaListaComponent, canActivate: [AuthGuard] },
  { path: 'cliente/cadastro', component: ClienteCadaComponent, canActivate: [AuthGuard] },
  { path: 'cliente/lista', component: ClienteLisComponent, canActivate: [AuthGuard] },
  { path: 'sobre/mim', component: SobreMimComponent, canActivate: [AuthGuard] },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
