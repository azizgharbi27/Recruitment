import { TestBed } from '@angular/core/testing';

import { CandidateWService } from './candidate-w.service';

describe('CandidateWService', () => {
  let service: CandidateWService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateWService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
