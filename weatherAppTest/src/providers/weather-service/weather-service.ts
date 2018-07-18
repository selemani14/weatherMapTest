import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class WeatherServiceProvider {
	
  constructor(public http: Http) { 
    
  }
  // get the weather info from openweather map api and return info
  getWeather(){
	  let appId = "95aafe07c4d8bbeaaf3c8087a8839a67";
	  let baseUrl = "http://api.openweathermap.org/data/2.5/";
	  let url = baseUrl+"forecast";
	  url += "?q=Johannesburg,ZA";
	  url += "&appId="+appId+"&units=metric";
	  return this.http.get(url);
  }

}
