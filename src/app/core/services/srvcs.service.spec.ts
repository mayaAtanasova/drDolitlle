import { TestBed } from '@angular/core/testing';

import { SrvcsService } from './srvcs.service';

describe('SrvcsService', () => {
  let service: SrvcsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvcsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
