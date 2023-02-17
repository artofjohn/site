import { Component } from '@angular/core';

import {
  ImageOverlayService,
} from '../../shared';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent {
  items:Array<any> = [
    {
      thumbnail: '../assets/images/art/ballabri_sm.jpg',
      image: '../../../../assets/images/art/ballabri.jpg',
    },
    {
      thumbnail: '../assets/images/art/botwmap_sm.jpg',
      image: '../../../../assets/images/art/botwmap.jpg',
    },
    {
      thumbnail: '../assets/images/art/creatures_sm.jpg',
      image: '../../../../assets/images/art/creatures.jpg',
    },
    {
      thumbnail: '../assets/images/art/creepingdoom_sm.jpg',
      image: '../../../../assets/images/art/creepingdoom.jpg',
    },
    {
      thumbnail: '../assets/images/art/houseshot_sm.jpg',
      image: '../../../../assets/images/art/houseshot.jpg',
    },
    {
      thumbnail: '../assets/images/art/moondoor_sm.jpg',
      image: '../../../../assets/images/art/moondoor.jpg',
    },
    {
      thumbnail: '../assets/images/art/reevehill_sm.jpg',
      image: '../../../../assets/images/art/reevehill.jpg',
    },
    {
      thumbnail: '../assets/images/art/soulburn_sm.jpg',
      image: '../../../../assets/images/art/soulburn.jpg',
    },
    {
      thumbnail: '../assets/images/art/wings_sm.jpg',
      image: '../assets/images/art/wings.jpg',
    }
  ];

  constructor(
    private imageOverlaySrv: ImageOverlayService,
  ) {}

  open(url: string) {
    this.imageOverlaySrv.setImgUrl(url);
    this.imageOverlaySrv.setShowOverlay(true);
  }
}
