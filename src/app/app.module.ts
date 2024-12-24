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
import { FormComponent } from './form/form.component';
import { FeaturedBrandsComponent } from './container/featured-brands/featured-brands.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { TestComponent } from './test/test.component';
import { DemoComponent } from './demo/demo.component';
import { SetBackground } from './CustomDirectives/SetBackground.directive';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { RendererDirective } from './CustomDirectives/renderer.directive';
import { AppendChildDirective } from './CustomDirectives/append-child.directive';
import { RendererComponent } from './renderer/renderer.component';
import { SetAttributeDirective } from './CustomDirectives/set-attribute.directive';
import { SetStyleDirective } from './CustomDirectives/set-style.directive';
import { SetPropertyDirective } from './CustomDirectives/set-property.directive'

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
    FormComponent,
    FeaturedBrandsComponent,
    ParentComponent,
    ChildComponent,
    TestComponent,
    DemoComponent,
    SetBackground,
    HighlightDirective,
    RendererDirective,
    AppendChildDirective,
    RendererComponent,
    SetAttributeDirective,
    SetStyleDirective,
    SetPropertyDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
