import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaHistorialComprasComponent } from './pantalla-historial-compras.component';

describe('PantallaHistorialComprasComponent', () => {
  let component: PantallaHistorialComprasComponent;
  let fixture: ComponentFixture<PantallaHistorialComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaHistorialComprasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaHistorialComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
