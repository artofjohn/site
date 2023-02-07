import { Injectable, Inject } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaMatchServiceService {

  private matches = new ReplaySubject<boolean>(1);
  public match$ = this.matches.asObservable();

  // Provide a CSS media query string like 'max-width: 640px'
  constructor(
    @Inject(String) public readonly query: string
  ) {
    // we need to make sure we are in a browser
    if (window) {
      const mediaQueryList = window.matchMedia(this.query);
      // here we pass the value to our ReplaySubject
      const listener = (event: any) => this.matches.next(event.matches);
      // run once and then add listener
      listener(mediaQueryList);
      mediaQueryList.addEventListener('change', listener);
    }
  }
}
