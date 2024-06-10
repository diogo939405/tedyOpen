import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCadaComponent } from './cliente-cada.component';

describe('ClienteCadaComponent', () => {
  let component: ClienteCadaComponent;
  let fixture: ComponentFixture<ClienteCadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteCadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteCadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
