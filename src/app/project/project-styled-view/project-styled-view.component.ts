import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-project-styled-view',
  templateUrl: './project-styled-view.component.html',
  styleUrls: ['./project-styled-view.component.css']
})
export class ProjectStyledViewComponent implements OnInit {
  @Input() project: Project;
  constructor() { }

  ngOnInit(): void {
  }

}
