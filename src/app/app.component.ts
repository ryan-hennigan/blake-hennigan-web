import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './project/shared/projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public projectService: ProjectsService) {
   }

  //  tags: string[];

  title = 'BlakeHennigan';
   ngOnInit(){
    // this.tags=this.projectService.getTags();
   }

}
