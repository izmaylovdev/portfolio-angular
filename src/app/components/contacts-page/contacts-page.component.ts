import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  lat = 48.429223;
  lng = 35.007916;
  constructor() { }

  ngOnInit() {
  }

}
