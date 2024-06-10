import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteLisComponent } from './cliente-lis.component';

describe('ClienteLisComponent', () => {
  let component: ClienteLisComponent;
  let fixture: ComponentFixture<ClienteLisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteLisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
