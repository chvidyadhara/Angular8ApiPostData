import { TestBed } from '@angular/core/testing';

import { PostserService } from './postser.service';

describe('PostserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostserService = TestBed.get(PostserService);
    expect(service).toBeTruthy();
  });
});
