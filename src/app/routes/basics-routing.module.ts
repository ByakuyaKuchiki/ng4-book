import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from '../article/article.component';
import { UserRestComponent } from '../user-rest/user-rest.component';
import { MessageComponent } from '../message/message.component';
import { BootstrapComponent } from '../bootstrap/bootstrap.component';

export const basicRoutes: Routes = [
  { path: '', redirectTo: 'article', pathMatch: 'full' },
  { path: 'article', component: ArticleComponent },
  { path: 'bootstrap', component: BootstrapComponent }
];
