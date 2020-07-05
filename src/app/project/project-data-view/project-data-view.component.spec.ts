import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDataViewComponent } from './project-data-view.component';

describe('ProjectDataViewComponent', () => {
  let component: ProjectDataViewComponent;
  let fixture: ComponentFixture<ProjectDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
