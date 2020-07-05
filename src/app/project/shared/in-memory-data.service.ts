import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Project } from './project.model';
import { PROJECTS } from './projects.mock';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const project =PROJECTS;
    const tags=[... new Set(PROJECTS.map(project => project.tag))];
    return {project,tags};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(projects: Project[]): number {
    return projects.length > 0 ? Math.max(...projects.map(project => +project.id)) + 1 : 11;
  }
}