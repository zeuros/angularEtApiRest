import { TestBed } from '@angular/core/testing';

import { MoviesRepositoryService } from './movies-repository.service';

describe('MoviesRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesRepositoryService = TestBed.get(MoviesRepositoryService);
    expect(service).toBeTruthy();
  });
});
