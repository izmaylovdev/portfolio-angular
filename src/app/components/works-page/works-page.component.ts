import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { iWork } from '../../iWork';


@Component({
  selector: 'app-works-page-component',
  templateUrl: './works-page.component.html',
  styleUrls: ['./works-page.component.scss']
})
export class WorksPageComponent implements OnInit {
  works: iWork[];
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.works = this.dataService.getWorks();
  }

}
