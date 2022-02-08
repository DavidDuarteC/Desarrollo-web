import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaContactoComponent } from './pantalla-contacto.component';

describe('PantallaContactoComponent', () => {
  let component: PantallaContactoComponent;
  let fixture: ComponentFixture<PantallaContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
