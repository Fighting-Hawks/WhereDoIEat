import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Geolocation} from 'ionic-native';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
    
  }
  getLocation(){
    console.log("Im in geolocation");
    let options = {enableHighAccuracy: true};
    let currentLocation = Geolocation.getCurrentPosition(options).then((location) => {
      var longitude = location.coords.longitude;
      var latitude = location.coords.latitude;
      alert("Latitude is: " + latitude + " , Longitude is: " + longitude);
    }).catch((error) => {
      console.log('Error getting location',error);
    });
  }
}
