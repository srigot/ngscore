import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonUndoComponent } from './bouton-undo.component';

describe('BoutonUndoComponent', () => {
  let component: BoutonUndoComponent;
  let fixture: ComponentFixture<BoutonUndoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonUndoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonUndoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
