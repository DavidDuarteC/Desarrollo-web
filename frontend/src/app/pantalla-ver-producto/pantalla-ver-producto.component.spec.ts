import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaVerProductoComponent } from './pantalla-ver-producto.component';

describe('PantallaVerProductoComponent', () => {
  let component: PantallaVerProductoComponent;
  let fixture: ComponentFixture<PantallaVerProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaVerProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaVerProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
