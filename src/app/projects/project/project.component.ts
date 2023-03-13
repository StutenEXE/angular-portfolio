import { Component, Input, OnInit } from '@angular/core';
import { Language } from 'src/models/language';
import { Project } from 'src/models/project';
import { ProjectService } from 'src/services/project.services';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project!: Project;

  languages!: string[];
  shares!: number[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getLanguages(this.project.languages_url).subscribe({
      next: (data) => {
        this.project.languages = [];
        const langages_brut = data;
        let sumLines = 0;
        Object.values(langages_brut).forEach(value => sumLines += value);

        for (let i = 0; i < Object.keys(langages_brut).length; i++) {
          let language: Language = new Language();
          language.name = Object.keys(langages_brut)[i];
          language.share = Math.round((Object.values(langages_brut)[i] / sumLines) * 100);
          this.project.languages.push(language);
        }

        // facto au dessus

        this.languages = [];
        this.shares = [];
        console.log(this.project.languages)
        for (let language of this.project.languages) {
          this.languages.push(language.name);
          this.shares.push(language.share);
        }
      }
    });
  }
}
