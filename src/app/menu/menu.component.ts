import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-file',
      },
      {
        label: 'Products',
        icon: 'pi pi-fw pi-pencil',
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-user',
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-calendar',

      },
    ];
  }

}
