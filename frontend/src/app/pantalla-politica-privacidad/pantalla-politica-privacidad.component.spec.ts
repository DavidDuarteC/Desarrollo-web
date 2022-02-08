import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaPoliticaPrivacidadComponent } from './pantalla-politica-privacidad.component';

describe('PantallaPoliticaPrivacidadComponent', () => {
  let component: PantallaPoliticaPrivacidadComponent;
  let fixture: ComponentFixture<PantallaPoliticaPrivacidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaPoliticaPrivacidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaPoliticaPrivacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
