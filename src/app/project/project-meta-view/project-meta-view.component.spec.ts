import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMetaViewComponent } from './project-meta-view.component';

describe('ProjectMetaViewComponent', () => {
  let component: ProjectMetaViewComponent;
  let fixture: ComponentFixture<ProjectMetaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMetaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMetaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
