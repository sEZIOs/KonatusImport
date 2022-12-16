import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeProgramComponent } from './visualize-program.component';

describe('VisualizeProgramComponent', () => {
  let component: VisualizeProgramComponent;
  let fixture: ComponentFixture<VisualizeProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizeProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizeProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
