import { TestBed } from '@angular/core/testing';

import { ServercallsService } from './servercalls.service';

describe('ServercallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServercallsService = TestBed.get(ServercallsService);
    expect(service).toBeTruthy();
  });
});
