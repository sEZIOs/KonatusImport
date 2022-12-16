import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramLinkComponent } from './program-link.component';

describe('ProgramLinkComponent', () => {
  let component: ProgramLinkComponent;
  let fixture: ComponentFixture<ProgramLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
