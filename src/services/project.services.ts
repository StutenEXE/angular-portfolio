import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from "src/models/project";

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  urlProjects: string = "https://api.github.com/users/stutenexe/repos";

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.urlProjects);
  }

  getLanguages(url: string): Observable<any[]> {
    return this.http.get<any[]>(url);
  }
}