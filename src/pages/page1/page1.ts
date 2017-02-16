import { Component } from '@angular/core';

import { NavController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {Geolocation} from 'ionic-native';



@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController, public loadingCtrl:LoadingController) {

  }

  //Returns device's current location
  getLocation(){

    let loading = this.loadingCtrl.create({
      content:'Please wait...'
    });
    loading.present();
    let currentLocation = Geolocation.getCurrentPosition(()=>{
    }).then((location) => {
      loading.dismiss();
      let longitude = location.coords.longitude;
      let latitude = location.coords.latitude;
      alert("Latitude is: " + latitude + " , Longitude is: " + longitude);
    }).catch((error) => {
      error = 'Error getting location';
      throw error;
    });
  }



    //Retrieve a list of restaurants based on the device location using YELP API

    getRestaurants(){

  }

}
