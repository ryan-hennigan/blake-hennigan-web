import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../shared/project.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectsService } from '../shared/projects.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project: Project;
  admin: boolean;

  constructor(private route: ActivatedRoute,private location: Location, private projectService: ProjectsService) { this.admin=true;}

  ngOnInit(): void {

    this.getProject();
  }

  getProject(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(ProjectsService.projectsMap.has(id)){
      this.project=ProjectsService.projectsMap.get(id);
    }
    else{
      this.projectService.getProject(id)
      .subscribe(project=> this.project = project);
    }
  }

  goBack(): void {
    this.location.back();
  }

  toggleAdmin(){
    this.admin=!this.admin;
  }


  delete(){
    this.projectService.deleteProject(this.project).subscribe(data=>{
      this.project = data;
      this.goBack();
    })
  }

  addImage(){
    this.project.imageData.images.push("");
  }

  removeImage(id: number){
    this.project.imageData.images.splice(id,1);
  }



  save(){
    this.projectService.saveProject(this.project).subscribe(data=>{
      this.project = data;
      this.goBack();
    })
  }
}
