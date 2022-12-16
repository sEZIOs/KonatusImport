import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingEssentialComponent } from './mapping-essential.component';

describe('MappingEssentialComponent', () => {
  let component: MappingEssentialComponent;
  let fixture: ComponentFixture<MappingEssentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappingEssentialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MappingEssentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
