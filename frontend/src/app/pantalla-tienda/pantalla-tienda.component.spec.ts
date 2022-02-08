import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaTiendaComponent } from './pantalla-tienda.component';

describe('PantallaTiendaComponent', () => {
  let component: PantallaTiendaComponent;
  let fixture: ComponentFixture<PantallaTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaTiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
