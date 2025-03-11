import { TestBed } from '@angular/core/testing';

import { ChamaApiService } from './chama-api.service';

describe('ChamaApiService', () => {
  let service: ChamaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChamaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
