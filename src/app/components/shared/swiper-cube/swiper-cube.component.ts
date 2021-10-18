import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { EffectCube, Pagination, Autoplay } from "swiper/core";
// install Swiper modules
SwiperCore.use([EffectCube, Pagination, Autoplay]);

@Component({
  selector: 'app-swiper-cube',
  templateUrl: './swiper-cube.component.html',
  styleUrls: ['./swiper-cube.component.scss']
})
export class SwiperCubeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
