import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaPerfilUsuarioComponent } from './pantalla-perfil-usuario.component';

describe('PantallaPerfilUsuarioComponent', () => {
  let component: PantallaPerfilUsuarioComponent;
  let fixture: ComponentFixture<PantallaPerfilUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaPerfilUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaPerfilUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
