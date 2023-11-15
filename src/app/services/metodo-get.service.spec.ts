import { TestBed } from '@angular/core/testing';

import { MetodoGetService } from './metodo-get.service';

describe('MetodoGetService', () => {
  let service: MetodoGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetodoGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
