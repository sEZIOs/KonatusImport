import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportSurfaceComponent } from './import-surface.component';

describe('ImportSurfaceComponent', () => {
  let component: ImportSurfaceComponent;
  let fixture: ComponentFixture<ImportSurfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportSurfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportSurfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
