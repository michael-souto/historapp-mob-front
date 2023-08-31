import { TestBed } from '@angular/core/testing';

import { AnnotationSearchService } from './annotation-search.service';

describe('AnnotationSearchService', () => {
  let service: AnnotationSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnotationSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
