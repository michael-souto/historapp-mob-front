import { TestBed } from '@angular/core/testing';

import { AnnotationCrudService } from './annotation-crud.service';

describe('AnnotationCrudService', () => {
  let service: AnnotationCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnotationCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
