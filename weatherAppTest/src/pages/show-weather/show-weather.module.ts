import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowWeatherPage } from './show-weather';

@NgModule({
  declarations: [
    ShowWeatherPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowWeatherPage),
  ],
})
export class ShowWeatherPageModule {}
