import { InitialViewComponent } from './initial-view/initial-view.component';
import { CurrentPostComponent } from './current-post/current-post.component';
import { PostComponent } from './home/post/post.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './home/category/category.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from '../app/nav-bar/nav-bar.component';


import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [ // permette di far sapere ad angular dell'esistentza di questi componenti.
                  // Perchè per default Angular non esegue la scansione
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CategoryComponent,
    PostComponent,
    CurrentPostComponent,
    InitialViewComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),  // permettono di aggiungere i moduli
     AppRoutingModule,
     FontAwesomeModule,
     HttpClientModule,
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent] // fa sapere ad angular quale componente avviare al suo avvio
})
export class AppModule {
  constructor(library: FaIconLibrary) { 
		library.addIconPacks(fas, fab, far);
	}
}
