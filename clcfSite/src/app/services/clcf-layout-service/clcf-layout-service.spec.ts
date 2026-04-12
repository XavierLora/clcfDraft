import { TestBed } from '@angular/core/testing';

import { ClcfLayoutService } from './clcf-layout-service';

describe('ClcfLayoutService', () => {
  let service: ClcfLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClcfLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
