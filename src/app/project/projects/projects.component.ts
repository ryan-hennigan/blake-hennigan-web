import { Component, OnInit } from '@angular/core';
import {Project, ProjectRequest} from '../shared/project.model';
import { ProjectsService } from '../shared/projects.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  newProject: ProjectRequest;

  constructor(private route: ActivatedRoute,private location: Location, private projectService: ProjectsService) {
    this.resetNewProject();

   }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() : void {
    this.projectService.getCachedProjects().subscribe(projects=>{
      this.projects=projects;
    })
  }

  save(){
    this.projectService.createProject(this.newProject).subscribe(data=>{
      this.resetNewProject();
      ProjectsService.projectsMap.set(data.id,data);
      this.projectService.saveProjectsToLocalStorage();
      this.projects=[...ProjectsService.projectsMap.values()];
    })
  }

  goBack(): void {
    this.location.back();
  }

  resetNewProject(){
    this.newProject = {
      name:"",
      description:"",
      imageData:{
        images:[],
        carsel:false
      },
      videoData:{
        videos:[]
      },
      tag:"",
      accessTime:null,
      style:"TEST"
    }
  }
}
