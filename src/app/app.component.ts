import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      window.location.reload();
    }, 2000);
  }
}
