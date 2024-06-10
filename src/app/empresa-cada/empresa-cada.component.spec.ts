import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaCadaComponent } from './empresa-cada.component';

describe('EmpresaCadaComponent', () => {
  let component: EmpresaCadaComponent;
  let fixture: ComponentFixture<EmpresaCadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaCadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresaCadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
