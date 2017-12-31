import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WorksPageComponent } from './components/works-page/works-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      title: 'About me'
    }
  },
  {
    path: 'works',
    component: WorksPageComponent,
    data: {
      title: 'My works'
    }
  },
  {
    path: 'contacts',
    component: ContactsPageComponent,
    data: {
      title: 'My contacts'
    }
  },
  {
    path: '*',
    pathMatch: 'full',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
