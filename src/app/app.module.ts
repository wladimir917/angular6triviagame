import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, CategoriesComponent, TagsComponent, QuestionsComponent } from './components';
import { CategoryService, TagService, QuestionService } from './services';

@NgModule({
  declarations: [
    AppComponent, CategoriesComponent, TagsComponent, QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CategoryService, TagService, QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
