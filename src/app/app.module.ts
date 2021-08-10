import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogCardComponent,
    BlogDetailsComponent,
    BlogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
