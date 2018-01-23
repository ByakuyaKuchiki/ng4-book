import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SlickModule } from "ngx-slick";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { ArticleComponent } from './article/article.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductRowComponent } from './product-row/product-row.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
    ArticleComponent,
    ProductsListComponent,
    ProductRowComponent
  ],
  imports: [
    BrowserModule,
    SlickModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
