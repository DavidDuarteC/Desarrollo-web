import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaPoliticaEnvioComponent } from './pantalla-politica-envio.component';

describe('PantallaPoliticaEnvioComponent', () => {
  let component: PantallaPoliticaEnvioComponent;
  let fixture: ComponentFixture<PantallaPoliticaEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaPoliticaEnvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaPoliticaEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
