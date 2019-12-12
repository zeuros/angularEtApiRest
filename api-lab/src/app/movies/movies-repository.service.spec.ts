import { TestBed } from '@angular/core/testing';

import { MoviesRepository } from './movies-repository.service';

describe('MoviesRepository', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesRepository = TestBed.get(MoviesRepository);
    expect(service).toBeTruthy();
  });
});
