import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CurrentPostComponent } from './current-post/current-post.component';
import { HomeComponent } from './home/home.component';
import { InitialViewComponent } from './initial-view/initial-view.component';
import { LogOutComponent } from './log-out/log-out.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { RentComponent } from './rent/rent.component';
import { SettingsComponent } from './settings/settings.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: 'my-rent',
    component: InitialViewComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'rent/:id',
    component: RentComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'log-out',
    component: LogOutComponent
  },
  {
    path: 'current/:id',
    component: CurrentPostComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
