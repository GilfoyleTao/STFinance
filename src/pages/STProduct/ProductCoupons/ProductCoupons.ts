
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { StorageService } from "../../../providers/StorageService";
import { STProductService } from "../STProductService";
import { USER_INFO,isLogin } from './../../../providers/Constants';
import { ProductPaymentPage } from './../ProductPayment/ProductPayment';
import { CityData } from './../../../providers/CityData';

@Component({
    selector: 'Page-ProductCoupons',
    templateUrl: 'ProductCoupons.html',
})
export class ProductCouponsPage {
    vv:any;
    gg:any;
    cou1:any;
    cou2:any;
    cou3:any;
    cou4:any;
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, private _STProductService: STProductService,public _StorageService:StorageService) {
        this.cou1=[
        {'categoryname':'10%涨息券'}];
        this.cou2=[
        {'categoryname':'20元优惠券'}];
        this.cou3=[
        {'categoryname':'10%涨息券'}];
        this.cou4=[
        {'categoryname':'20元优惠券'}]
    }

    ionViewDidLoad() {

    }

    ionViewDidEnter() {
        
    }

    goProductPayment(data){
        this.navCtrl.push(ProductPaymentPage,{test:data.categoryname});
    }
}
