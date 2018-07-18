import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ShowWeatherPage } from '../show-weather/show-weather';
import { WeatherServiceProvider } from '../../providers/weather-service/weather-service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-home', 
  templateUrl: 'home.html'
})
export class HomePage { 
	temperature: any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public WeatherServiceProvider: WeatherServiceProvider) {
		// Call my weather service that i created in the provider folder 
		let getWeather = this.WeatherServiceProvider.getWeather().map(response => response.json());
		getWeather.subscribe( response => 
		{
			//Get the response put it in the temperature variable which we use as a parameter in the openWeatherMap(temperature) function in the view 
			this.temperature = response.list;
		});
		
		
	}
	
	// the open weather function gets temperature objects after clicking the View Weather button
	openWeatherMap(temperature){ 
		//open the show weather page modal and pass the temperature data to that page
		let myModal = this.modalCtrl.create(ShowWeatherPage, {temperature: temperature});
		myModal.present();
	}
}
