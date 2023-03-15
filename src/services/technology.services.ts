import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Technology } from "src/models/technology";

@Injectable({
    providedIn: 'root',
  })
  export class TechnologyService {
    technologies: Technology[] = [
        { name:"Java", image_src: "https://cdn.iconscout.com/icon/free/png-256/java-60-1174953.png" },
        { name: "JavaScript", image_src: "https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png" },
        { name: "TypeScript", image_src: "https://cdn.iconscout.com/icon/free/png-256/typescript-3521774-2945272.png" },
        { name: "C", image_src: "https://cdn.iconscout.com/icon/free/png-256/c-57-1175191.png" },
        { name: "C++", image_src: "https://cdn.iconscout.com/icon/free/png-256/c-4-226082.png" },
        { name: "Python", image_src: "https://cdn.iconscout.com/icon/free/png-256/python-2-226051.png" },
        { name: "SQL", image_src: "https://cdn.iconscout.com/icon/free/png-256/sql-29-1127899.png" },
        { name:"VB.NET", image_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/256px-VB.NET_Logo.svg.png" },
        { name: "PHP", image_src: "https://cdn.iconscout.com/icon/free/png-256/php-2752101-2284918.png" },
        { name: "Angular", image_src: "https://cdn.iconscout.com/icon/free/png-256/angular-3-226070.png" },
        { name: "Java Springboot", image_src: "https://img.icons8.com/color/256/spring-logo.png" },
    ]; 
  
    constructor(private http: HttpClient) { }
  
    getTechnologies(): Observable<Technology[]> {
      return of(this.technologies);
    }
}