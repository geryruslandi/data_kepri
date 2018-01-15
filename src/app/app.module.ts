import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SubyekPage } from '../pages/subyek/subyek';
import { IndikatorPage } from '../pages/indikator/indikator';
import { DataSubyekPage } from '../pages/data-subyek/data-subyek';
import { ChartsModule } from 'ng2-charts';

// In your App's module:



//service
import { dataProvider } from '../services/data-provider.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SubyekPage,
    DataSubyekPage,
    IndikatorPage
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SubyekPage,
    DataSubyekPage,
    IndikatorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    dataProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
