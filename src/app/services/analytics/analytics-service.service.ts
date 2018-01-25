import { Injectable } from '@angular/core';

import { AnalyticsImplementation, Metric } from '../interfaces/analytics.interface';

@Injectable()
export class AnalyticsService {

  constructor(private implementation: AnalyticsImplementation) { }
  recordEvent(metric: Metric): void {
    this.implementation.recordEvent(metric);
  }

  record(metric: Metric): void {
    this.implementation.recordEvent(metric);
  }

}
