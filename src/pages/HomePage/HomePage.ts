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

  constructor(public navCtrl: NavController, public loadingCtrl:LoadingController) {

  }

  //Returns device's current location
  getLocation(){

    let loading = this.loadingCtrl.create({
      content:'Please wait...'
    });
    loading.present();
    let currentLocation = Geolocation.getCurrentPosition(()=>{
      setTimeout(3000);
    }).then((location) => {
      loading.dismiss();
      let longitude = location.coords.longitude;
      let latitude = location.coords.latitude;
      this.navCtrl.push(MapPagePage,{
        longitude : longitude,
        latitude : latitude
      });
    }).catch((error) => {
      error = 'Error getting location';
      throw error;

    });
  }




    //Retrieve a list of restaurants based on the device location using YELP API

  getRestaurants(long,lat){

  }


  //THIRD PARTY APIs : Google Directions, Google




}
