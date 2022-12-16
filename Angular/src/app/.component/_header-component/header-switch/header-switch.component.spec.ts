import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSwitchComponent } from './header-switch.component';

describe('HeaderSwitchComponent', () => {
  let component: HeaderSwitchComponent;
  let fixture: ComponentFixture<HeaderSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
