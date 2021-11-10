import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './views/login/login.component';
import { CreateScheduleComponent } from './views/schedule/create-schedule/create-schedule.component';
import { ScheduleListComponent } from './views/schedule/schedule-list/schedule-list.component';

import { HttpClientModule } from '@angular/common/http';

//services
import { AuthService } from './services/auth.service';
import { SubjectsComponent } from './views/subjects/subjects.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateScheduleComponent,
    ScheduleListComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
