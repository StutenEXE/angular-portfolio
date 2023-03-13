import { HttpClient } from "@angular/common/http";
import { Injectable, InjectionToken } from "@angular/core";
import { map, Observable } from "rxjs";
import { Language } from "src/models/language";
import { Project } from "src/models/project";

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
    
    urlProjects: string = "https://api.github.com/users/stutenexe/repos";

    constructor(private http: HttpClient) {}

    getProjects(): Observable<Project[]> {
      return this.http.get<Project[]>(this.urlProjects)
        .pipe(map((projects: Project[]) => {
            for(let project of projects) {
              this.getLanguages(project.languages_url).subscribe({
                next: (data: Language[]) => project.languages = data                
              });
            }
            return projects;
        })
      );
    }

    getLanguages(url: string): Observable<Language[]> {
      return this.http.get(url)
      .pipe(map((data: Object) => {
        let languages: Language[] = [];
        let sumLines = 0;
        Object.values(data).forEach(value => sumLines += value)
        for(let i = 0; i < Object.keys(data).length; i++) {
          let language: Language = new Language();
          language.name =  Object.keys(data)[i];
          language.share = Math.round((Object.values(data)[i] / sumLines) * 100);
          languages.push(language);
        }
        return languages;
      }));
    }
}