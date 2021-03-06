import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { ScheduleListComponent } from './views/schedule/schedule-list/schedule-list.component';
import { CreateScheduleComponent } from './views/schedule/create-schedule/create-schedule.component';
import { SubjectsComponent } from './views/subjects/subjects.component';
import { MySubjectsComponent } from './views/my-subjects/my-subjects.component';
import { TutorshipComponent } from './views/tutorship/tutorship.component';
import { StudentAgendaComponent } from './views/student-agenda/student-agenda.component';
import { TeacherAgendaComponent } from './views/teacher-agenda/teacher-agenda.component';
import { AgendaDetailComponent } from './views/agenda-detail/agenda-detail.component';
import { TeacherHistoryComponent } from './views/teacher-history/teacher-history.component';
import { StudentHistoryComponent } from './views/student-history/student-history.component';
import { ProfileComponent } from './views/profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/profile' },
  { path: 'login', component: LoginComponent },
  { path: 'schedule-list', component: ScheduleListComponent },
  { path: 'schedule-create', component: CreateScheduleComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'mySubjects', component: MySubjectsComponent },
  { path: 'tutorship', component: TutorshipComponent },
  { path: 'student-agenda', component: StudentAgendaComponent },
  { path: 'teacher-agenda', component: TeacherAgendaComponent },
  { path: 'agenda-detail', component: AgendaDetailComponent },
  { path: 'teacher-history', component: TeacherHistoryComponent },
  { path: 'student-history', component: StudentHistoryComponent },
  { path: 'profile', component: ProfileComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
