import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaPreguntasFrecuentesComponent } from './pantalla-preguntas-frecuentes.component';

describe('PantallaPreguntasFrecuentesComponent', () => {
  let component: PantallaPreguntasFrecuentesComponent;
  let fixture: ComponentFixture<PantallaPreguntasFrecuentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaPreguntasFrecuentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaPreguntasFrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
