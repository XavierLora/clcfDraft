import { TestBed } from '@angular/core/testing';

import { ClcfNavService } from './clcf-navigation-service';

describe('ClcfNavService', () => {
  let service: ClcfNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClcfNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
