import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { SlideComponent } from './components/slide/slide.component';
import { LoginComponent } from './components/login/login.component';
import { ReadComponent } from './components/read/read.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
      },
      {
        path: 'details/:id', component: DetailsComponent
      },
      {
        path: 'silde', component: SlideComponent
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'read', component: ReadComponent
      }
];
