import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllSurveysComponent } from './show-all-surveys.component';

describe('ShowAllSurveysComponent', () => {
  let component: ShowAllSurveysComponent;
  let fixture: ComponentFixture<ShowAllSurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllSurveysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
