import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';

import {
  Router,
  NavigationEnd,
  NavigationStart,
} from '@angular/router';

import {
  Meta,
  Title,
} from '@angular/platform-browser';

import {
  AppConfigService,
  MediaMatchService,
  SidenavService,
} from './shared'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('snav') snav: any;

  description: string = '';
  title: string = 'Art of John Baker';
  version: string = '';

  match960: boolean = false;
  sidenavOpen: boolean = false;

  private media960Matcher = new MediaMatchService('(max-width: 960px)');

  constructor(
    private appConfigSrv: AppConfigService,
    private meta: Meta,
    private metaTitle: Title,
    private router: Router,
    private sidenavSrv: SidenavService,
  ) {
    // track media changes to enact necessary script calls
    this.media960Matcher.match$.subscribe(
      value => {
        this.match960 = value;
      }
    );
    // track whether sidenav has been forced to close by any other component
    this.sidenavSrv.forcedClose$.subscribe(
      close => {
        if (close = true) { this.sidenavOpen = false; }
      }
    );
    this.title = appConfigSrv.title;
    // set meta and app details from centralized app config service
    this.metaTitle.setTitle(appConfigSrv.title);
    this.meta.addTag({
      name: 'viewport',
      content: appConfigSrv.viewport,
    });
    this.meta.addTag({
      name: 'description',
      content: appConfigSrv.description,
    });
    this.meta.addTag({
      name: 'author',
      content: appConfigSrv.author,
    });
    this.version = this.appConfigSrv.author;
  }

  initRouterControls() {
    this.router.events.subscribe((e) => {
      if(e instanceof NavigationEnd) {
        if (this.snav.opened) this.snav.toggle();
      }
    });
  }

  emailLink(url: string){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', url);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  ngOnInit() {
    this.initRouterControls();
  }
}
