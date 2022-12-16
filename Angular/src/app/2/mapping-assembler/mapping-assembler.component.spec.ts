import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingAssemblerComponent } from './mapping-assembler.component';

describe('MappingAssemblerComponent', () => {
  let component: MappingAssemblerComponent;
  let fixture: ComponentFixture<MappingAssemblerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappingAssemblerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MappingAssemblerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
