import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { MapPagePage } from '../map-page/map-page';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'page-HomePage',
  templateUrl: 'HomePage.html'
})
export class HomePage {

  longitude : 0;
  latitude : 0;
  token: "";
  apikey : null;

  constructor(public navCtrl: NavController, private http: Http) {
    this.http = http;
  }

  ionViewDidLoad(){
    Geolocation.getCurrentPosition(()=>{
    }).then((location) => {
      this.setLongitude(location.coords.longitude);
      this.setLatitude(location.coords.latitude);
      console.log("latitude: " + this.latitude +" longitude: "+ this.longitude);
    }).catch((error) => {
      error = 'Error getting location';
      throw error;
    });
  }

  //Setter for Latitude
  setLatitude(latitude){
     this.latitude = latitude;
  }

  //Setter for Longitude
  setLongitude(longitude){
     this.longitude = longitude;
  }

  //oAuth Yelp
  loginAPI(){
    let url = 'https://api.yelp.com/oauth2/token';
    let header = new Headers();
    let credentials = "grant_type=client_credentials"+"client_id=YMkkjYuojBf-uOh9atGUiQ"+"client_secret=02lg9Lw04Y4l276RTjH95xy5B4wO9q7Ujr00fEoQPTx1R85UTbRfQmkwacg8e3CI";
    header.append('Content-Type','application/x-www-form-urlencoded');

    return new Promise(resolve=>{
      this.http.post(url,credentials,{headers:header}).subscribe(data=>{
        if(data.json().success){
          console.log(data.json().access_token);
          this.token = data.json().access_token;
        }
      });
    });
  }



  //Retrieve a list of restaurants based on the device location using YELP API
  getRestaurants(long,lat){



  }

  pushCoordinates(){
    this.navCtrl.setRoot(MapPagePage,{
    longitude : this.longitude,
    latitude : this.latitude
  });
  }
}
