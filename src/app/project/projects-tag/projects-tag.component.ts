import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../shared/project.model';
import { ProjectsService } from '../shared/projects.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-projects-tag',
  templateUrl: './projects-tag.component.html',
  styleUrls: ['./projects-tag.component.css']
})
export class ProjectsTagComponent implements OnInit {

  tag: string;
  projects: Project[];

  constructor(private route: ActivatedRoute, private projectService: ProjectsService) { 

  }

  ngOnInit(): void {
    this.setTag();
  }

  setTag(): void{
    this.route.paramMap.subscribe(paramMap=>{
      this.tag=paramMap.get('tagname');
      this.getProjectsByTag();
    })
  }

  getProjectsByTag(): void{
    this.projectService.getProjectsByTag(this.tag)
      .subscribe(data=>{
        this.projects=data;
      })
  }
}
