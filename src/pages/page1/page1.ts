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

  getLocation(){

    console.log("Im in getLocation :)");

    let loading = this.loadingCtrl.create({
      content:'Hold on...'
    });
    loading.present();

    let currentLocation = Geolocation.getCurrentPosition(()=>{
    }).then((location) => {
      loading.dismiss();
      let longitude = location.coords.longitude;
      let latitude = location.coords.latitude;
      alert("Latitude is: " + latitude + " , Longitude is: " + longitude);
    }).catch((error) => {
      console.log('Error getting location',error);
    });
  }



  /*
    getRestaurants(){

  }
  */
}
