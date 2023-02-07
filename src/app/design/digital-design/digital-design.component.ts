import { Component, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-digital-design',
  templateUrl: './digital-design.component.html',
  styleUrls: ['./digital-design.component.scss']
})
export class DigitalDesignComponent {

  @ViewChild('videoPlayer') videoplayer!: ElementRef;

  video1: any;
  video2: any;
  video3: any;
  video4: any;

  constructor(
    private _sanitizer: DomSanitizer
  ) {
    this.video1 = this.videoUrl('http://www.youtube.com/embed/j1_IfYJIqbs');
    this.video2 = this.videoUrl('http://www.youtube.com/embed/isunrE6mObE');
    this.video3 = this.videoUrl('http://www.youtube.com/embed/YbOAgtb6Omk');
    this.video4 = this.videoUrl('http://www.youtube.com/embed/k3ylY_2nQOM');
  }

  downloadMyFile(url: string, filename: string){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  videoUrl(url: string): any {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
