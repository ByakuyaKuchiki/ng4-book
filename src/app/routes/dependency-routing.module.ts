import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from '../article/article.component';

export const routes: Routes = [
    { path: 'article', component: ArticleComponent }
  ];
