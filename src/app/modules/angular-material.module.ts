import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSelectModule} from "@angular/material/select";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";

const materialModules = [
  CommonModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatGridListModule,
  MatSelectModule,
  MatChipsModule,
  MatIconModule
]


@NgModule({
  declarations: [],
  imports: [
    ...materialModules
  ],
  exports: [
    ...materialModules
  ]
})
export class AngularMaterialModule { }
