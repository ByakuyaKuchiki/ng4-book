import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from '../article/article.component';
import { UserRestComponent } from '../user-rest/user-rest.component';

export const dependencyRoutes: Routes = [
    { path: 'article', component: ArticleComponent },
    { path: '', redirectTo: 'article', pathMatch: 'full' },
    { path: 'user-mock', component: UserRestComponent}
  ];
