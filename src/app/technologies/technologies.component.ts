import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/models/technology';
import { TechnologyService } from 'src/services/technology.services';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  technologies: Technology[] = [];

  constructor(private technologyService: TechnologyService) { }

  ngOnInit(): void {
    this.technologyService.getTechnologies().subscribe({
      next: (data) => this.technologies = data
    })
  }

}
