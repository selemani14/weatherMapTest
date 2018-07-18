import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ShowWeatherPage } from '../pages/show-weather/show-weather';
import { WeatherServiceProvider } from '../providers/weather-service/weather-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	ShowWeatherPage
  ], 
  imports: [
    BrowserModule, 
    IonicModule.forRoot(MyApp),
	HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	ShowWeatherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherServiceProvider
  ]
})
export class AppModule {}
