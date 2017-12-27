import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router/src/directives/router_outlet';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerTransition', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width: '100%',
            transform: 'translateX(-100px)',
            opacity: 0
          }),
          { optional: true }
        ),
        query('.skills mat-grid-tile', style({ opacity: 0 }), { optional: true }),
        query('.work', style({ opacity: 0 }), { optional: true }),

        // move page off screen right on leave
        query(':leave',
          animate('500ms linear',
            style({
              position: 'fixed',
              width: '100%',
              transform: 'translateX(100px)',
              opacity: 0
            })
          ),
          { optional: true }
        ),
        // move page in screen from left to right
        query(':enter',
          animate('500ms linear',
            style({
              opacity: 1,
              transform: 'translateX(0%)',
            })
          ),
          { optional: true }
        ),
        query(':enter .skills mat-grid-tile',
          stagger(100, [
            style({ transform: 'translateY(30px)', opacity: 0 }),
            animate('1s ease-in-out',
              style({
                transform: 'translateY(0px)',
                opacity: 1
              })
            ),
          ]),
          { optional: true }
        ),
        query(':enter  .work',
          stagger(100, [
            style({ opacity: 0 }),
            animate('1s ease-in-out',
              style({
                opacity: 1
              })
            ),
          ]),
          { optional: true }
        ),
      ])
    ])
  ]
})
export class AppComponent {

  constructor ( private route: ActivatedRoute, private router: Router, private title: Title ) {}

  onInit () {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.route)
      .map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe(({ title }) => {
        this.title.setTitle(`${title}`);
      });
  }

  getState (outlet: RouterOutlet) {
    return outlet.activatedRouteData.title;
  }
}
