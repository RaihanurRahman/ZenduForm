import { FormList, Menulist, submissionList, markersList } from './constants';
import { Component } from '@angular/core';
import { IForm, IMarker, IMenu, ISubmission } from './models';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ZenduForm';
  menuList: IMenu[] = Menulist;
  searchKey: string;
  forms: IForm[] = FormList;
  markers: IMarker[] = markersList;
  zoom = 8;
  submissions: ISubmission[] = submissionList;
  private path = '../assets/images';
  showMap = true;

  constructor(private matIconRegistery: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistery.addSvgIcon('export', this.setPath(`${this.path}/export.svg`));
  }

  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  searchFieldCloseIconClick() {
    this.searchKey = '';
  }

  mapClicked($event) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  onValChange(value: string) {
    this.showMap = (value === 'map');
  }
}
