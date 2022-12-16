import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingOptionalComponent } from './mapping-optional.component';

describe('MappingOptionalComponent', () => {
  let component: MappingOptionalComponent;
  let fixture: ComponentFixture<MappingOptionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappingOptionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MappingOptionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
