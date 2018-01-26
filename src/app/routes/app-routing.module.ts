
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dependencyRoutes } from './dependency-routing.module';


import { DashboardComponent } from '../dashboard/dashboard.component';
import { ArticleComponent } from '../article/article.component';
import { DemoFormSkuComponent } from '../demo-form-sku/demo-form-sku.component';
import { basicRoutes } from './basics-routing.module';


export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'basics',
    children: basicRoutes
  },
  {
    path: 'dependency',
      children: dependencyRoutes
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
