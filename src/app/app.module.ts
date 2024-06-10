import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { AvatarModule } from 'primeng/avatar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';


import { ConfirmationService, MessageService } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { ClienteCadaComponent } from './cliente-cada/cliente-cada.component';
import { ClienteLisComponent } from './cliente-lis/cliente-lis.component';
import { EmpresaCadaComponent } from './empresa-cada/empresa-cada.component';
import { EmpresaListaComponent } from './empresa-lista/empresa-lista.component';
import { AuthService } from './auth.service';


import { TableModule } from 'primeng/table';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    InicioComponent,
    ClienteCadaComponent,
    ClienteLisComponent,
    EmpresaCadaComponent,
    EmpresaListaComponent,
    SobreMimComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    PanelModule,
    TableModule,
    AvatarModule,
    ToggleButtonModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ToastModule,
    DialogModule,
    InputNumberModule,
  ],
  providers: [AuthService, ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }