import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ButtonComponent } from './container/product-list/button/button.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { AlertComponent } from './container/product-list/button/alert/alert.component';
import { AlertTwoComponent } from './container/product-list/button/alert-two/alert-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopheaderComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ButtonComponent,
    ProductDetailComponent,
    AlertComponent,
    AlertTwoComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
