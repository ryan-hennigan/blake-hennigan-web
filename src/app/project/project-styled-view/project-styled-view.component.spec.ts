import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStyledViewComponent } from './project-styled-view.component';

describe('ProjectStyledViewComponent', () => {
  let component: ProjectStyledViewComponent;
  let fixture: ComponentFixture<ProjectStyledViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectStyledViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStyledViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
