import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDeveloperComponent } from './perfil-developer.component';

describe('PerfilDeveloperComponent', () => {
  let component: PerfilDeveloperComponent;
  let fixture: ComponentFixture<PerfilDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilDeveloperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
