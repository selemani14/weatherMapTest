import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-show-weather',
  templateUrl: 'show-weather.html',
})
export class ShowWeatherPage {
	temperature: any;
  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
	  //Get the temperature data sent through modal create function and send it to the view
	  this.temperature = navParams.get('temperature'); 
	}
	
	//close the page
	closeWeatherMap() {
		this.viewCtrl.dismiss();
	}
}
