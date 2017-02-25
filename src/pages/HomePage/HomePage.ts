import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { MapPagePage } from '../map-page/map-page';



@Component({
  selector: 'page-HomePage',
  templateUrl: 'HomePage.html'
})
export class HomePage {

  longitude : 0;
  latitude : 0;

  constructor(public navCtrl: NavController, public loadingCtrl:LoadingController) {

    //var isSuccessful = false;
    let loading = this.loadingCtrl.create({
      content:'Please wait...'
    });

    loading.present();
    let currentLocation = Geolocation.getCurrentPosition(()=>{
    }).then((location) => {
      //isSuccessful = true;
      loading.dismiss();
      this.setLongitude(location.coords.longitude);
      this.setLatitude(location.coords.latitude);
      console.log("latitude: " + this.latitude +" longitude: "+ this.longitude);
      //this.pushCoordinates();
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

  /*Returns device's current location
  getLocation(){


  }
  */



    //Retrieve a list of restaurants based on the device location using YELP API

  getRestaurants(long,lat){

  }


  pushCoordinates(){
    this.navCtrl.push(MapPagePage,{
    longitude : this.longitude,
    latitude : this.latitude
  });
}



  //THIRD PARTY APIs : Google Directions, Google





}
