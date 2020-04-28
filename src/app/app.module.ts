import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './firebase.credentials';

import { MyApp } from './app.component';
import { WatchingPage } from '../pages/watching/watching';
import { LibraryPage } from '../pages/library/library';
import { ItemsPage } from '../pages/items/items';
import { ItemPage } from '../pages/items/item/item';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { WatchingListService } from '../services/watching-list/watching-list.service';


@NgModule({
  declarations: [
    MyApp,
    WatchingPage,
    LibraryPage,
    ItemsPage,
    ItemPage,
    SettingsPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WatchingPage,
    LibraryPage,
    ItemsPage,
    ItemPage,
    SettingsPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    WatchingListService
  ]
})
export class AppModule {}
