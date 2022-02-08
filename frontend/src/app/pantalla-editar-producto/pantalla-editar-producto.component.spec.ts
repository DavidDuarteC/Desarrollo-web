import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaEditarProductoComponent } from './pantalla-editar-producto.component';

describe('PantallaEditarProductoComponent', () => {
  let component: PantallaEditarProductoComponent;
  let fixture: ComponentFixture<PantallaEditarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaEditarProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaEditarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
