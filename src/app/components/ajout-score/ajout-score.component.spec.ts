import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutScoreComponent } from './ajout-score.component';

describe('AjoutScoreComponent', () => {
  let component: AjoutScoreComponent;
  let fixture: ComponentFixture<AjoutScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
