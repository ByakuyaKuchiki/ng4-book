import { Component, OnInit } from '@angular/core';

import { AnalyticsService } from '../services/analytics/analytics-service.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor(private analytics: AnalyticsService) {
    this.analytics.record({
      eventName: 'componentCreated',
      scope: 'AnalyticsDemoComponent'
    });
  }

  ngOnInit() {
    this.analytics.record({
      eventName: 'componentOnInit',
      scope: 'AnalyticsDemoComponent'
    });
  }

  buyButtonPressed(product: string) {
    this.analytics.record({
      eventName: 'buyButtonPressed',
      scope: product
    });
  }

}
