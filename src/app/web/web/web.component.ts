import { Component } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent {

  goToLink(url: string){
    window.open(url, "_blank");
  }
}
