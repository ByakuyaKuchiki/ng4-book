
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dependencyRoutes } from './dependency-routing.module';


import { DashboardComponent } from '../dashboard/dashboard.component';
import { ArticleComponent } from '../article/article.component';
import { DemoFormSkuComponent } from '../demo-form-sku/demo-form-sku.component';


export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'basics',
    children: [
      {path: '', redirectTo: 'article', pathMatch: 'full'},
      {path: 'article', component: ArticleComponent},
      {path: 'form-demo', component: DemoFormSkuComponent},
    ]
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
