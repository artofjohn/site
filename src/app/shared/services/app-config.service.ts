import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private config: any = {
    author: 'John Baker',
    description: 'Art and resume of John Baker',
    lastUpdate: 'January 31, 2023',
    title: 'Art of John Baker',
    viewport:
      `viewport-fit=cover,
      initial-scale=1,
      maximum-scale=1,
      user-scalable=1,
      width=device-width`,
    version: '1.0',
  }

  constructor() { }

  get author() { return this.config.author }
  get description() { return this.config.description }
  get lastUpdate() { return this.config.lastUpdate }
  get title() { return this.config.title }
  get viewport() { return this.config.viewport }
  get version() { return this.config.version }

}
