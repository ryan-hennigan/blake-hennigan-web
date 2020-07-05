import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsTagComponent } from './project/projects-tag/projects-tag.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'tags/:tagname', component: ProjectsTagComponent},
  { path: 'aboutme', component: AboutmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }