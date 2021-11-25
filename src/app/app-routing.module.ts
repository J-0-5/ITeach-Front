import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { ScheduleListComponent } from './views/schedule/schedule-list/schedule-list.component';
import { CreateScheduleComponent } from './views/schedule/create-schedule/create-schedule.component';
import { SubjectsComponent } from './views/subjects/subjects.component';
import { MySubjectsComponent } from './views/my-subjects/my-subjects.component';
import { TutorshipComponent } from './views/tutorship/tutorship.component';
import { ProfileComponent } from './views/profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'login', component: LoginComponent },
  { path: 'schedule-list', component: ScheduleListComponent },
  { path: 'schedule-create', component: CreateScheduleComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'mySubjects', component: MySubjectsComponent },
  { path: 'tutorship', component: TutorshipComponent },
  { path: 'profile', component: ProfileComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
