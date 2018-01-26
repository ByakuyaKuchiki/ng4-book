import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from '../article/article.component';
import { UserRestComponent } from '../user-rest/user-rest.component';
import { MessageComponent } from '../message/message.component';

export const dependencyRoutes: Routes = [
    { path: '', redirectTo: 'user-mock', pathMatch: 'full' },
    { path: 'user-mock', component: UserRestComponent},
    { path: 'messages', component: MessageComponent}
  ];
