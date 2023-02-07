import { TestBed } from '@angular/core/testing';

import { MediaMatchServiceService } from './media-match-service.service';

describe('MediaMatchServiceService', () => {
  let service: MediaMatchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaMatchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
