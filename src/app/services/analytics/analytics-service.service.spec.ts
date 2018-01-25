import { TestBed, inject } from '@angular/core/testing';

import { AnalyticsServiceService } from './analytics-service.service';

describe('AnalyticsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnalyticsServiceService]
    });
  });

  it('should be created', inject([AnalyticsServiceService], (service: AnalyticsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
