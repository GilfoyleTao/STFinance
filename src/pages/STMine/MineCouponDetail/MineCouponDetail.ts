import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { STMineService } from "../STMineService";

@Component({
    selector: 'Page-MineCouponDetail',
    templateUrl: 'MineCouponDetail.html',
})
export class MineCouponDetailPage {
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController,public _STMineService: STMineService,) {
        
    }
    
    ionViewDidLoad() {
    }

    ionViewDidEnter() {
        
    }
    
}
