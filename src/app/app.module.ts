import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
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
import { ProfileComponent } from './views/profile/profile.component';
import { MySubjectsComponent } from './views/my-subjects/my-subjects.component';
import { FilterPipe } from './pipes/filter.pipe';
import { TutorshipComponent } from './views/tutorship/tutorship.component';
// import { DialogTutorshipComponent } from './views/dialog-tutorship/dialog-tutorship.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateScheduleComponent,
    ScheduleListComponent,
    SubjectsComponent,
    ProfileComponent,
    MySubjectsComponent,
    FilterPipe,
    TutorshipComponent,
    // DialogTutorshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
