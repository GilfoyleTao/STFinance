
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { StorageService } from "../../../providers/StorageService";
import { STProductService } from "../STProductService";

import { Utils } from '../../../providers/Utils';
import { USER_INFO, isLogin } from '../../../providers/Constants';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ProductIncomeDisplayPage } from '../ProductIncomeDisplay/ProductIncomeDisplay';
import { ProductCouponsPage } from './../ProductCoupons/ProductCoupons';
import { ProductRiskStatementPage } from './../ProductRiskStatement/ProductRiskStatement';
import { ProductServiceAgreementPage } from '../ProductServiceAgreement/ProductServiceAgreement';
import { PropertyListPage } from './../../STProperty/PropertyList/PropertyList';
import { ProductListPage } from './../ProductList/ProductList';

@Component({
    selector: 'Page-ProductPayment',
    templateUrl: 'ProductPayment.html',

})
export class ProductPaymentPage {
    
    vb: any;
    gb: any;
    paym: boolean;
    risk: boolean;
    data:any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, private _STProductService: STProductService, public _StorageService: StorageService, public alerCtrl: AlertController) {
        this.data=navParams.get("test");
    }


    ionViewDidLoad() {

    }


    ionViewDidEnter() {
        this.vb=document.getElementById("vv");
        this.gb=document.getElementById("gg");
    }

    goProductIncomeDisplay(){
        this.navCtrl.push(ProductIncomeDisplayPage);
    }

    goProductCoupons(){
        this.navCtrl.push(ProductCouponsPage);
    }

    goProductRiskStatement(){
        this.navCtrl.push(ProductRiskStatementPage);
    }

    goProductServiceAgreement(){
        this.navCtrl.push(ProductServiceAgreementPage);
    }

    goPropertyList(){
        this.navCtrl.push(PropertyListPage);
    }

    goProductList(){
        this.navCtrl.push(ProductListPage);
    }

    yespaym(){
        this.paym=true;
    }
    nopaym(){
        this.paym=false;
    }

    yesrisk(){
        this.risk=true;
    }
    norisk(){
        this.risk=false;
    }
}
