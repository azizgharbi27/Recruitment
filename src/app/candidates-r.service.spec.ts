import { TestBed } from '@angular/core/testing';

import { CandidatesRService } from './candidates-r.service';

describe('CandidatesRService', () => {
  let service: CandidatesRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatesRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
