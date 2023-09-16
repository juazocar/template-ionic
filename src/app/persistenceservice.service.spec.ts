import { TestBed } from '@angular/core/testing';

import { PersistenceserviceService } from './persistenceservice.service';

describe('PersistenceserviceService', () => {
  let service: PersistenceserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersistenceserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
