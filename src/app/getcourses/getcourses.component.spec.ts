import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcoursesComponent } from './getcourses.component';

describe('GetcoursesComponent', () => {
  let component: GetcoursesComponent;
  let fixture: ComponentFixture<GetcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
