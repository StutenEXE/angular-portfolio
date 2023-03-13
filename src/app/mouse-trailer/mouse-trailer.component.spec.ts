import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseTrailerComponent } from './mouse-trailer.component';

describe('MouseTrailerComponent', () => {
  let component: MouseTrailerComponent;
  let fixture: ComponentFixture<MouseTrailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouseTrailerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
