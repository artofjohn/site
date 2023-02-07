import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  // track whether the sidenav should be forced to close
  private forcedClose = new BehaviorSubject<boolean>(false);
  forcedClose$ = this.forcedClose.asObservable();

  constructor() {}

  // pass in true from anywhere in the application to force the sidenav to close
  forceClose(close:boolean) {
    this.forcedClose.next(close);
  }
}
