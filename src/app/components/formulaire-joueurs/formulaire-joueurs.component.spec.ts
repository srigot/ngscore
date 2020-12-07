import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireJoueursComponent } from './formulaire-joueurs.component';

describe('FormulaireJoueursComponent', () => {
  let component: FormulaireJoueursComponent;
  let fixture: ComponentFixture<FormulaireJoueursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireJoueursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireJoueursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
