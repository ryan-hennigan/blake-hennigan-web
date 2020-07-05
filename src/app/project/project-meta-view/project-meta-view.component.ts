import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-project-meta-view',
  templateUrl: './project-meta-view.component.html',
  styleUrls: ['./project-meta-view.component.css']
})
export class ProjectMetaViewComponent implements OnInit {
  @Input() project: Project;
  
  constructor() { }

  ngOnInit(): void {
  }

}
