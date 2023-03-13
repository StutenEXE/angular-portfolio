import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-trailer',
  templateUrl: './mouse-trailer.component.html',
  styleUrls: ['./mouse-trailer.component.css']
})
export class MouseTrailerComponent implements OnInit {

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
