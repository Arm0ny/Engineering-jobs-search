import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { JobCardsComponent } from './components/job-cards/job-cards.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSelectModule} from "@angular/material/select";
import {MatChipsModule} from "@angular/material/chips";
import { HomeComponent } from './components/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { JobsDetailsComponent } from './components/jobs-details/jobs-details.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import {MatIconModule} from "@angular/material/icon";
import {ErrorCatchingInterceptor} from "./interceptors/httperrors.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    JobCardsComponent,
    HomeComponent,
    JobsDetailsComponent,
    CompanyDetailsComponent,
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
        MatSelectModule,
        MatChipsModule,
        AppRoutingModule,
        MatToolbarModule,
        MatIconModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorCatchingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
