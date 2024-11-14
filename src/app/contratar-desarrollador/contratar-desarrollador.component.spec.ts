import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratarDesarrolladorComponent } from './contratar-desarrollador.component';

describe('ContratarDesarrolladorComponent', () => {
  let component: ContratarDesarrolladorComponent;
  let fixture: ComponentFixture<ContratarDesarrolladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratarDesarrolladorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratarDesarrolladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
