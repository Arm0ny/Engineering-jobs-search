import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {JobsDetailsComponent} from "./components/jobs-details/jobs-details.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'jobs/:id', component: JobsDetailsComponent},
]



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
