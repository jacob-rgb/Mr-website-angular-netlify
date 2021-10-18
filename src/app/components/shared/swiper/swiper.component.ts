import { Component, OnInit, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import SwiperCore, {
  Navigation,
  Pagination,
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  
})
@Injectable()
export class SwiperComponent implements OnInit {

  show:boolean = false;

  constructor(@Inject(PLATFORM_ID) private platform: Object) {
    if(isPlatformBrowser(this.platform)) {
        this.show = true;
    }
   }

  ngOnInit(): void {
  }


}
