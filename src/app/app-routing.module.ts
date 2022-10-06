import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {JobCardsComponent} from "./job-cards/job-cards.component";
import {JobsDetailsComponent} from "./jobs-details/jobs-details.component";


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
