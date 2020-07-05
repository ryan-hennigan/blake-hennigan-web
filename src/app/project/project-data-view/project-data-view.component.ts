import { Component, OnInit, Input } from '@angular/core';
import { ImageData, VideoData } from '../shared/project.model';


@Component({
  selector: 'app-project-data-view',
  templateUrl: './project-data-view.component.html',
  styleUrls: ['./project-data-view.component.css']
})
export class ProjectDataViewComponent implements OnInit {
  @Input() imageData: ImageData;
  @Input() videoData: VideoData;
  @Input() id : string;
  constructor() { }

  ngOnInit(): void {
  }

}
