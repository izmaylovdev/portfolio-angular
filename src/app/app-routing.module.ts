import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WorksPageComponent } from './components/works-page/works-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'works',
    component: WorksPageComponent,
    data: {
      title: 'Works'
    }
  },
  {
    path: 'work/:id',
    component: ProjectPageComponent,
    data: {
      title: 'Work'
    }
  },
  {
    path: 'contacts',
    component: ContactsPageComponent,
    data: {
      title: 'Contacts'
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
