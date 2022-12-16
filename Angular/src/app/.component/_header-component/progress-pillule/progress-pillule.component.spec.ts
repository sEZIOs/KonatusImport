import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressPilluleComponent } from './progress-pillule.component';

describe('ProgressPilluleComponent', () => {
  let component: ProgressPilluleComponent;
  let fixture: ComponentFixture<ProgressPilluleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressPilluleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressPilluleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
