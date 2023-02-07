import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageOverlayService {

  private showOverlay = new BehaviorSubject<boolean>(false);
  showOverlay$ = this.showOverlay.asObservable();

  private imgUrl = new BehaviorSubject<string>('');
  imgUrl$ = this.imgUrl.asObservable();

  constructor() { }

  setShowOverlay(show: boolean) {
    this.showOverlay.next(show);
  }

  setImgUrl(filename: string) {
    this.imgUrl.next(filename);
  }
}
