import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-trailer',
  templateUrl: './mouse-trailer.component.html',
  styleUrls: ['./mouse-trailer.component.scss']
})
export class MouseTrailerComponent implements OnInit {

  @Input() position!: number;

  trailer!: HTMLElement | null;

  ngOnInit(): void {
    this.trailer = document.getElementById("mouse-bg");
    
    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;
      this.trailer?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
     };
  }

}
