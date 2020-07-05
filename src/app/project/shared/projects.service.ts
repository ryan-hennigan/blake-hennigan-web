import { Injectable } from '@angular/core';
import { Project, ProjectRequest } from './project.model';
import { PROJECTS } from './projects.mock';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map,flatMap, tap, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public static readonly PROJECTS_KEY="PROJECTS_MAP";
  private static readonly PROJECTS_TTL=10*1000;

  public static projectsMap : Map<string,Project>;
  public static tagList: Array<string>;

  private mockUrl="api/project";
  private projectsUrl = this.mockUrl;//"https://api.blakehennigan.com/project";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
    ProjectsService.projectsMap = new Map<string,Project>();
     this.getTagList().subscribe(data =>{
      ProjectsService.tagList = data;
      console.log(data);
    });
    this.loadProjectsFromLocalStorage();
    this.expireCache();
   }

   getTags(){
     return ProjectsService.tagList;
   }

   expireCache(){
     setInterval(()=> {
       let updated: boolean = false;
       ProjectsService.projectsMap.forEach(project=>{
        if(this.checkTTLExpire(project.accessTime)){
          ProjectsService.projectsMap.delete(project.id);
          console.log(`expiring project: ${project.id}`);
          updated = true;
        }
       });
       if(updated){
        this.saveProjectsToLocalStorage();
       }
     },2*1000);
   }

   getTagList(): Observable<string[]>{
    return this.getCachedProjects()
    .pipe(
      map(projects=> [... new Set(projects.map(project => project.tag))])
    );
  }

  getProjects(): Observable<Project[]>{
    console.log("calling API");
    return this.http.get<Project[]>(this.projectsUrl);
  }

  getCachedProjects() : Observable<Project[]> {
    if(ProjectsService.projectsMap.size === 0){
      return this.getProjects()
        .pipe(
          tap(projects=>{
            projects.forEach(proj=>{
              proj.accessTime=this.getTTLExpire();
              ProjectsService.projectsMap.set(proj.id,proj);
            });
            this.saveProjectsToLocalStorage();
          })
        );
    }
    else{
      return of([... ProjectsService.projectsMap.values()]);
    }
  }

  getProjectsByTag(tag: string): Observable<Project[]>{
    return this.getCachedProjects()
      .pipe(
        map(projects => projects.filter(p=>p.tag===tag))
      );
  }

  getProject(id: string) : Observable<Project>{
    console.log(`calling get API: ${id}`);
    const url = `${this.projectsUrl}/${id}`;
    return this.http.get<Project>(url).pipe(
      tap(proj => console.log(proj)),
      catchError(this.handleError<Project>(`getProject id=${id}`))
    );
  }

  saveProject(data: Project) : Observable<Project>{
    console.log(`calling save API: ${data.id}`);
    const url = `${this.projectsUrl}/${data.id}`;
    return this.http.put<Project>(url,data,this.httpOptions).pipe(
      tap(proj => 
        {
          console.log(proj);
          ProjectsService.projectsMap.set(data.id,data);
          this.saveProjectsToLocalStorage();
        }),
      catchError(this.handleError<Project>(`saveProject id=${data.id}`))
    );
  }

  createProject(data: ProjectRequest) : Observable<Project>{
    return this.http.post<Project>(this.projectsUrl,data,this.httpOptions).pipe(
      tap(proj => 
        {
          console.log(proj);
          ProjectsService.projectsMap.set(proj.id,proj);
          this.saveProjectsToLocalStorage();
        }),
      catchError(this.handleError<Project>(`createProject`))
    );
  }

  deleteProject(data: Project) : Observable<Project>{
    console.log(`calling delete API: ${data.id}`);
    const url = `${this.projectsUrl}/${data.id}`;
    return this.http.delete<Project>(url,this.httpOptions).pipe(
      tap(proj => 
        {
          ProjectsService.projectsMap.delete(data.id);
          this.saveProjectsToLocalStorage();
        }),
      catchError(this.handleError<Project>(`deleteProject id=${data.id}`))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  loadProjectsFromLocalStorage(): void {
    ProjectsService.projectsMap = new Map(JSON.parse(localStorage.getItem(ProjectsService.PROJECTS_KEY)));
  }

  saveProjectsToLocalStorage(): void {
    localStorage.setItem(ProjectsService.PROJECTS_KEY,JSON.stringify(Array.from(ProjectsService.projectsMap.entries())));
  }

  getTTLExpire(): number{
    return (Date.now() + ProjectsService.PROJECTS_TTL);
  }

  checkTTLExpire(exptime: number): boolean{
    // console.log(`${Date.now()} - ${exptime}`);
    return (Date.now() - exptime) > 0;
  }
}
