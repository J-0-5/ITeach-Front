import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAgendaComponent } from './teacher-agenda.component';

describe('TeacherAgendaComponent', () => {
  let component: TeacherAgendaComponent;
  let fixture: ComponentFixture<TeacherAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherAgendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
