import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectEditorComponent } from './project-editor/project-editor.component';
import { ProjectDataViewComponent } from './project-data-view/project-data-view.component';
import { ProjectMetaViewComponent } from './project-meta-view/project-meta-view.component';
import { ProjectsTagComponent } from './projects-tag/projects-tag.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectStyledViewComponent } from './project-styled-view/project-styled-view.component';
import { InMemoryDataService }  from './shared/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SafePipePipe } from '../pipes/safe-pipe.pipe';
import { ProjectRoutingModule } from './project-routing.module';


@NgModule({
  declarations: [
    ProjectDataViewComponent,
    ProjectMetaViewComponent,
    ProjectStyledViewComponent,
    ProjectDetailComponent,
    ProjectEditorComponent,
    ProjectListComponent,
    ProjectsTagComponent,
    ProjectsComponent,
    SafePipePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
