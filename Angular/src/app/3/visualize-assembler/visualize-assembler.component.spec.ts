import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeAssemblerComponent } from './visualize-assembler.component';

describe('VisualizeAssemblerComponent', () => {
  let component: VisualizeAssemblerComponent;
  let fixture: ComponentFixture<VisualizeAssemblerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizeAssemblerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizeAssemblerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
