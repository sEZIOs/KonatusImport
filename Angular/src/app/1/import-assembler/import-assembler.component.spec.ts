import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportAssemblerComponent } from './import-assembler.component';

describe('ImportAssemblerComponent', () => {
  let component: ImportAssemblerComponent;
  let fixture: ComponentFixture<ImportAssemblerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportAssemblerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportAssemblerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
