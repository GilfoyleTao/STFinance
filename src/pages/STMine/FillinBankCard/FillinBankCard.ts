
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { StorageService } from "../../../providers/StorageService";
import { STMineService } from "../STMineService";
import { Utils } from './../../../providers/Utils';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { NativeService } from './../../../providers/NativeService';
@Component({
    selector: 'Page-FillinBankCard',
    templateUrl: 'FillinBankCard.html',
})
export class FillinBankCardPage {
 
    constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public modalCtrl: ModalController,private _STMineService: STMineService,public _StorageService: StorageService,public alerCtrl: AlertController, public _NativeService: NativeService,) { 

    }

    ionViewDidLoad() {
    }

    ionViewDidEnter() {

    }

    Update(OverlayId) {
        document.getElementById(OverlayId).setAttribute('style', 'display:block');
        document.getElementsByClassName('aq-overlay-backdrop')[1].setAttribute('style', 'display:block');
      }
    
      OK() {
            let overlay = document.getElementsByClassName('aq-common-overlay');
            for (let i = 0; i < overlay.length; i++) {
              overlay[i].setAttribute('style', 'display:none');
            }
            document.getElementsByClassName('aq-overlay-backdrop')[1].setAttribute('style', 'display:none');
          }
        
}
