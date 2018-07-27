import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MineCouponDetailPage } from './../MineCouponDetail/MineCouponDetail';


@Component({
    selector: 'Page-MineCoupon',
    templateUrl: 'MineCoupon.html',
})
export class MineCouponPage {
    mycoupon:any;
    constructor(public navCtrl: NavController,public navParams: NavParams) {
        
    }

    ionViewDidLoad() {
        
    }

    ionViewDidEnter() {

    }
    goMineCouponDetail(){
        this.navCtrl.push(MineCouponDetailPage)
    }

   
}
