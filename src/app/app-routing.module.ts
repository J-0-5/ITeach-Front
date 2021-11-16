import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { ScheduleListComponent } from './views/schedule/schedule-list/schedule-list.component';
import { SubjectsComponent } from './views/subjects/subjects.component';
import { ProfileComponent } from './views/profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'login', component: LoginComponent },
  { path: 'schedule-list', component: ScheduleListComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'profile', component: ProfileComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
