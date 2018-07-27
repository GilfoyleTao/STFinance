import { isLogin, } from './../../../providers/Constants';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StorageService } from "../../../providers/StorageService";
import { STProductService } from "../STProductService";
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ProductPaymentPage } from '../ProductPayment/ProductPayment';

@Component({
    selector: 'Page-ProductDetails',
    templateUrl: 'ProductDetails.html',
})
export class ProductDetailsPage {

    pg:boolean;
    atr:any;
    btr:any;
    rtr:any;
    
    constructor(public navCtrl: NavController, public navParams: NavParams, private _STProductService: STProductService, public _StorageService: StorageService, public alerCtrl: AlertController) {

    }

    ionViewDidLoad() {
    }

    ionViewDidEnter() {
        
    }

    bg(){
        this.pg=true;
    }
    nobg(){
        this.pg=false;
    }
    
    goProductPayment(){
        this.navCtrl.push(ProductPaymentPage);
    }

    OpenOverlay(OverlayId) {
        document.getElementById(OverlayId).setAttribute('style', 'display:block');
        document.getElementsByClassName('aq-overlay-backdrop')[0].setAttribute('style', 'display:block');
        }
        
    CloseOverlay() {
        let overlay = document.getElementsByClassName('aq-common-overlay');
        for (let i = 0; i < overlay.length; i++) {
        overlay[i].setAttribute('style', 'display:none');
        }
        document.getElementsByClassName('aq-overlay-backdrop')[0].setAttribute('style', 'display:none');
    }

    
    onclickresult(numresult,price,date) {
        this.atr = document.getElementById("price");
        this.btr = document.getElementById("date");
        this.rtr = document.getElementById("numresult");
        this.rtr.value =((this.atr.value/365)*this.btr.value*0.1266).toFixed(2);
     }
}
