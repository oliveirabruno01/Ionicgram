import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonPopover } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('profile-popover') pf_popovoer: IonPopover;

  constructor(private router: Router) { }

  ngOnInit() {}

  dismissModal() {
    this.pf_popovoer.dismiss();
    console.log('dismissed');
  }

  getPath() {
    return this.router.url.split('/')[1]
  }


}
