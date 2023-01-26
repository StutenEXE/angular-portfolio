import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  TECHS: string[] = ["Java Springboot", "Java", "VB.NET", "PHP", "JavaScript", "SQL"];
  tech: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  getRandomTech(): string {
    let idxNewTech = Math.round(Math.random() * (this.TECHS.length) - 1);
    let newTech = this.TECHS[idxNewTech];
    return newTech;
  }
}
