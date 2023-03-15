import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  TECHS: string[] = ["Java Springboot", "Java", "VB.NET", "PHP", "JavaScript", "TypeScript", "SQL", "C", "C++", "Python", "Angular"];
  tech: string = "";
  idxNextTech: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.constructNewTech();

    setInterval(() => {
      this.constructNewTech();
    }, 2000)
  }

  async constructNewTech() {
    let newTech = this.getRandomTech();

    if (this.tech !== "") this.TECHS.push(this.tech);

    this.TECHS.splice(this.TECHS.indexOf(newTech), 1)
    this.tech = "";

    for(let i = 0; i < newTech.length; i++) {
      await new Promise(f => setTimeout(f, 50 + Math.random() * 50));
      this.tech = this.tech + newTech.charAt(i);
    }
  }
  getRandomTech(): string {
    let idxNewTech = Math.round(Math.random() * (this.TECHS.length - 1));
    let newTech = this.TECHS[idxNewTech];
    return newTech;
  }
}
