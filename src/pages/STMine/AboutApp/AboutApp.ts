import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { STMineService } from "../STMineService";

@Component({
    selector: 'Page-AboutApp',
    templateUrl: 'AboutApp.html',
})
export class AboutAppPage {
   
    constructor(public navCtrl: NavController,public navParams: NavParams,public viewCtrl: ViewController,public modalCtrl: ModalController,private _STMineService: STMineService,) {
       
    }
    ionViewDidLoad() {
        
    }
    ionViewDidEnter() {
        
    }
    
}




