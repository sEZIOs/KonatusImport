import { TestBed } from '@angular/core/testing';

import { InterfaceViewService } from './interface-view.service';

describe('InterfaceViewService', () => {
  let service: InterfaceViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterfaceViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
