import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  skills;
  constructor() {
    this.skills = [
      {
        groupName: 'Frontend',
        skills: [
          { title: 'HTML', img: '/assets/html.png', level: 1 },
          { title: 'CSS', img: '/assets/css.svg', level: 1 },
          { title: 'JavaScript', img: '/assets/js.png', level: .7 },
          { title: 'Angular', img: '/assets/angular.svg', level: .7 },
          { title: 'Vue.js', img: '/assets/vue.png', level: .3 },
          { title: 'Jasmine.js', img: '/assets/jasmine.svg', level: .6 },
          { title: 'SVG', img: '/assets/svg.png', level: .5 }
        ]
      },
      {
        groupName: 'Backend',
        skills: [
          { title: 'PHP', img: '/assets/php.svg', level: .3 },
          { title: 'MySQL', img: '/assets/mysql.svg', level: .9 }
        ]
      },
      {
        groupName: 'Workflow',
        skills: [
          { title: 'Gulp', img: '/assets/gulp.png', level: .5 },
          { title: 'Webpack', img: '/assets/webpack.png', level: .3 },
          { title: 'Pug', img: '/assets/pug.svg', level: 1 },
          { title: 'TypeScript', img: '/assets/ts.png', level: .6 },
          { title: 'SCSS', img: '/assets/scss.svg', level: 1 }
        ]
      }
    ];
  }

  ngOnInit() {
  }

}
