import { TestBed, inject } from '@angular/core/testing';

import { MediaMatchService } from './media-match.service';

describe('MediaMatchService', () => {
  let service: MediaMatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide:MediaMatchService, useValue: jasmine.createSpyObj([''])}]
    });
    service = TestBed.inject(MediaMatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
