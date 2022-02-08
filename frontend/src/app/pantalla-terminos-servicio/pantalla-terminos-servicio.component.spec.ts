import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaTerminosServicioComponent } from './pantalla-terminos-servicio.component';

describe('PantallaTerminosServicioComponent', () => {
  let component: PantallaTerminosServicioComponent;
  let fixture: ComponentFixture<PantallaTerminosServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaTerminosServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaTerminosServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
