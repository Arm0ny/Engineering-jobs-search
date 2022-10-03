import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { JobCardsComponent } from './job-cards/job-cards.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatSelectModule} from "@angular/material/select";
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    JobCardsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    FlexLayoutModule,
    MatSelectModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
