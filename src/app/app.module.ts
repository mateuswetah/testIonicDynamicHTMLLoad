import { MyDynamicComponent } from './../components/my-dynamic/my-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { OnMount, DynamicHTMLModule } from 'ng-dynamic';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MyDynamicComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DynamicHTMLModule.forRoot({
      components: [
        { component: MyDynamicComponent, selector: 'my-dynamic' },
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MyDynamicComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
