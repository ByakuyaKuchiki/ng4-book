import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from '../article/article.component';

export const dependencyRoutes: Routes = [
    { path: 'article', component: ArticleComponent },
    { path: '', redirectTo: 'article', pathMatch: 'full' }
  ];
