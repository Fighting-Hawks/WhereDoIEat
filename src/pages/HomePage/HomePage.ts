import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { MapPagePage } from '../map-page/map-page';



@Component({
  selector: 'page-HomePage',
  templateUrl: 'HomePage.html'
})
export class HomePage {

  longitude : 0;
  latitude : 0;

  constructor(public navCtrl: NavController) {
    let currentLocation = Geolocation.getCurrentPosition(()=>{
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

  //Retrieve a list of restaurants based on the device location using YELP API
  getRestaurants(long,lat){

  }

  pushCoordinates(){
    this.navCtrl.setRoot(MapPagePage,{
    longitude : this.longitude,
    latitude : this.latitude
  });
}



  //THIRD PARTY APIs : Google Directions, Google





}
