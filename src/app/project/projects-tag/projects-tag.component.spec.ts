import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsTagComponent } from './projects-tag.component';

describe('ProjectsTagComponent', () => {
  let component: ProjectsTagComponent;
  let fixture: ComponentFixture<ProjectsTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
