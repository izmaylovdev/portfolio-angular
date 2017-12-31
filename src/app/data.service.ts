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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nobis illo vel qui totam adipisci
          facilis! Dicta veniam, deserunt aliquid magnam vitae a doloremque tempore ipsum. Soluta veritatis
          obcaecati id nam, quaerat perspiciatis maxime accusamus. Temporibus ex aspernatur cupiditate modi inventore
          ipsam mollitia explicabo alias, repudiandae velit ratione quidem praesentium.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nobis illo vel qui totam adipisci
          facilis! Dicta veniam, deserunt aliquid magnam vitae a doloremque tempore ipsum. Soluta veritatis
          obcaecati id nam, quaerat perspiciatis maxime accusamus. Temporibus ex aspernatur cupiditate modi inventore
          ipsam mollitia explicabo alias, repudiandae velit ratione quidem praesentium. Soluta veritatis
          obcaecati id nam, quaerat perspiciatis maxime accusamus. Temporibus ex aspernatur cupiditate modi inventore
          ipsam mollitia explicabo alias, repudiandae velit ratione quidem praesentium.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nobis illo vel qui totam adipisci
          facilis! Dicta veniam, deserunt aliquid magnam vitae a doloremque tempore ipsum. Soluta veritatis
          obcaecati id nam, quaerat perspiciatis maxime accusamus.</p>
        `,
        thumbURL: '/assets/works/imr.png',
        url: 'http://my.imr.world'
      },
      {
        id: 1,
        title: 'Product Manager',
        description: `
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nobis illo vel qui totam adipisci
          facilis! Dicta veniam, deserunt aliquid magnam vitae a doloremque tempore ipsum. Soluta veritatis
          obcaecati id nam, quaerat perspiciatis maxime accusamus. Temporibus ex aspernatur cupiditate modi inventore
          ipsam mollitia explicabo alias, repudiandae velit ratione quidem praesentium.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nobis illo vel qui totam adipisci
          facilis! Dicta veniam, deserunt aliquid magnam vitae a doloremque tempore ipsum. Soluta veritatis
          obcaecati id nam, quaerat perspiciatis maxime accusamus. Temporibus ex aspernatur cupiditate modi inventore
          ipsam mollitia explicabo alias, repudiandae velit ratione quidem praesentium. Soluta veritatis
          obcaecati id nam, quaerat perspiciatis maxime accusamus. Temporibus ex aspernatur cupiditate modi inventore
          ipsam mollitia explicabo alias, repudiandae velit ratione quidem praesentium.</p>
        `,
        thumbURL: '/assets/works/mg.png',
        url: 'http://mg.new-norm.pro'
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
