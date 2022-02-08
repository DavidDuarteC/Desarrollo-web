import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaCrudComponent } from './pantalla-crud.component';

describe('PantallaCrudComponent', () => {
  let component: PantallaCrudComponent;
  let fixture: ComponentFixture<PantallaCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
