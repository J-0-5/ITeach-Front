import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { ScheduleListComponent } from './views/schedule/schedule-list/schedule-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'login', component: LoginComponent },
  { path: 'schedule-list', component: ScheduleListComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
