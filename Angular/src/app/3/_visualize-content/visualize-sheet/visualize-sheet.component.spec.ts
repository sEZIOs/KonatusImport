import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeSheetComponent } from './visualize-sheet.component';

describe('VisualizeSheetComponent', () => {
  let component: VisualizeSheetComponent;
  let fixture: ComponentFixture<VisualizeSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizeSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
