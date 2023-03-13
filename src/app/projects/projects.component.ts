import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from 'src/services/project.services';
import { Project } from 'src/models/project';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  sub!: Subscription;
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.sub = this.projectService.getProjects().subscribe({
        next: (data: Project[]) => {
          this.projects = data;
          for(let i = 0; i < data.length; i++) {
            this.projects[i].languages = data[i].languages;
          }
        }
      });
    
  }
}
