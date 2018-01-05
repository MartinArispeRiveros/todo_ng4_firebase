import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityComponent } from './activity/activity.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'activity-list', component: ActivityListComponent},
  {path: 'activity', component: ActivityComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
