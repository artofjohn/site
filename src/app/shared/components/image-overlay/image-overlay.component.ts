import { Component } from '@angular/core';

import { ImageOverlayService } from '../../services';

@Component({
  selector: 'app-image-overlay',
  templateUrl: './image-overlay.component.html',
  styleUrls: ['./image-overlay.component.scss']
})
export class ImageOverlayComponent {
  showOverlay: boolean = false;
  imgUrl: string = '';
  constructor(
    private imageOverlaySrv: ImageOverlayService,
  ) {
    this.imageOverlaySrv.showOverlay$.subscribe(value => this.showOverlay = value);
    this.imageOverlaySrv.imgUrl$.subscribe(value => this.imgUrl = value);
  }

  close() {
    this.imageOverlaySrv.setShowOverlay(false);
  }
}
