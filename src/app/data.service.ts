import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  works;

  constructor () {
    this.works = [
      {
        id: 0,
        title: 'International Monopoly of Reality',
        description: `
          <p>Create two SPA. First for the personal cabinet, and the second for the admin panel.
          I maintended this project for several months.</p>
        `,
        thumbURL: '/assets/works/imr.png',
        url: 'http://my.imr.world'
      },
      {
        id: 1,
        title: 'Product Manager',
        description: `
          <p>Create SPA for learning and testing.</p>
          <p>Email for access: m-izmaylov@inbox.ru</p>
        `,
        thumbURL: '/assets/works/mg.png',
        url: 'http://mg.new-norm.pro'
      },
      {
        id: 2,
        title: 'SkyWay',
        description: `
          <p>Create responsive HTML layout and JS scripts for UI elements.</p>
        `,
        thumbURL: '/assets/works/skyway.png',
        url: 'http://skyway.new-norm.pro/'
      }
    ];
  }

  getWorks () {
    return this.works;
  }

  getWork (id: number) {
    return this.works.find(el => el.id === id);
  }

}
