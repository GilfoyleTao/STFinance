

import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { StorageService } from "../../../providers/StorageService";
import { STPropertyService } from "../STPropertyService";
import { USER_INFO, isLogin } from './../../../providers/Constants';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ProductIncomeDisplayPage } from '../../STProduct/ProductIncomeDisplay/ProductIncomeDisplay';

@Component({
    selector: 'Page-PropertyWithdraw',
    templateUrl: 'PropertyWithdraw.html',
})
export class PropertyWithdrawPage {

    paym: boolean;
    quanbu: number;
    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public viewCtrl: ViewController, public modalCtrl: ModalController, private _STPropertyService: STPropertyService, public _StorageService: StorageService) {

    }
    ionViewDidLoad() {

    }

    ionViewDidEnter() {

    }
    OpenOverlay88(OverlayId) {
        document.getElementById(OverlayId).setAttribute('style', 'display:block');
        document.getElementsByClassName('aq-overlay-backdrop')[0].setAttribute('style', 'display:block');
    }

    CloseOverlay88() {
        //this._StorageService.write("quanbu", this.quanbu);
        let overlay = document.getElementsByClassName('aq-common-overlay');
            for (let i = 0; i < overlay.length; i++) {
              overlay[i].setAttribute('style', 'display:none');
            }
        document.getElementsByClassName('aq-overlay-backdrop')[0].setAttribute('style', 'display:none');
    }

    goProductIncomeDisplay() {
        this.navCtrl.push(ProductIncomeDisplayPage);
    }
    quanbuquchu() {
        this.quanbu = 500;
    }
    yespaym() {
        this.paym = true;
    }
    nopaym() {
        this.paym = false;
    }

}
