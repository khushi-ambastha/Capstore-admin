import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonfeedbackComponent } from './commonfeedback.component';

describe('CommonfeedbackComponent', () => {
  let component: CommonfeedbackComponent;
  let fixture: ComponentFixture<CommonfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
