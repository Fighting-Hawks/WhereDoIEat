import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../HomePage';
/*
  Generated class for the MapPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-map-page',
  templateUrl: 'map-page.html'
})
export class MapPagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var longitude = navParams.get('longitude');
    var latitude = navParams.get('latitude');
    console.log("Latitude is: " + latitude + " , Longitude is: " + longitude);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPagePage');
    //Display google map
    // showMapOfRestaurants();
  }

  //Show Google Maps of restaurant (for now, show current location)
  showMapOfRestaurants(){

  }

}
