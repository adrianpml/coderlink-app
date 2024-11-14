import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaDesarrolladorComponent } from './busqueda-desarrollador.component';

describe('BusquedaDesarrolladorComponent', () => {
  let component: BusquedaDesarrolladorComponent;
  let fixture: ComponentFixture<BusquedaDesarrolladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusquedaDesarrolladorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaDesarrolladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
