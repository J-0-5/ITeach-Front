import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorshipComponent } from './tutorship.component';

describe('TutorshipComponent', () => {
  let component: TutorshipComponent;
  let fixture: ComponentFixture<TutorshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
