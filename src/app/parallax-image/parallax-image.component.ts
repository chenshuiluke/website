import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'parallax-image',
  templateUrl: './parallax-image.component.html',
  styleUrls: ['./parallax-image.component.css']
})
export class ParallaxImageComponent implements OnInit {
  @Input('image-url') image_url:String;
  constructor() { }

  ngOnInit() {
  }

}
