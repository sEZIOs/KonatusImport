import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingProgramComponent } from './mapping-program.component';

describe('MappingProgramComponent', () => {
  let component: MappingProgramComponent;
  let fixture: ComponentFixture<MappingProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappingProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MappingProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
