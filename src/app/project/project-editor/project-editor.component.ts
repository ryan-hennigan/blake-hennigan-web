import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-project-editor',
  templateUrl: './project-editor.component.html',
  styleUrls: ['./project-editor.component.css']
})
export class ProjectEditorComponent implements OnInit {
  @Input() project: Project;

  styles: string[] =[
    "METATOP_DATABOT",
    "METALEFT_DATARIGHT",
    "METARIGHT_DATALEFT"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addImage(){
    this.project.imageData.images.push("");
  }

  removeImage(id: number){
    this.project.imageData.images.splice(id,1);
  }

  addVideo(){
    this.project.videoData.videos.push("");
  }

  removeVideo(id: number){
    this.project.videoData.videos.splice(id,1);
  }
}
