import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAgendaComponent } from './student-agenda.component';

describe('StudentAgendaComponent', () => {
  let component: StudentAgendaComponent;
  let fixture: ComponentFixture<StudentAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAgendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
