import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MatSidenavModule, 
    MatButtonModule, 
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatInputModule
  } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent,
    CategoriesComponent,
    TagsComponent,
    QuestionsComponent,
    QuestionAddUpdateComponent
  } from './components';
import { CategoryService, TagService, QuestionService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    TagsComponent,
    QuestionsComponent,
    QuestionAddUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Forms
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [
    CategoryService, TagService, QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
