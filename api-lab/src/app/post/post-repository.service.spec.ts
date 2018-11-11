import { TestBed } from '@angular/core/testing';

import { PostRepositoryService } from './post-repository.service';

describe('PostRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostRepositoryService = TestBed.get(PostRepositoryService);
    expect(service).toBeTruthy();
  });
});
