import { Component, Input } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { StorageService } from '../../../providers/StorageService';

@Component({
    selector: 'Page-RelieveBankCard',
    templateUrl: 'RelieveBankCard.html',
})
export class RelieveBankCardPage {
   truename:string
    constructor( public _StorageService: StorageService,public navCtrl: NavController,public navParams: NavParams,public viewCtrl: ViewController,public modalCtrl: ModalController,) {
    
    }

    int(OverlayId) {
        this._StorageService.write("truename",this.truename);
        document.getElementById(OverlayId).setAttribute('style', 'display:block');
        document.getElementsByClassName('aq-overlay-backdrop')[0].setAttribute('style', 'display:block');
      }
    
      Closet() {
        let overlay = document.getElementsByClassName('aq-common-overlay');
            for (let i = 0; i < overlay.length; i++) {
              overlay[i].setAttribute('style', 'display:none');
            }
            document.getElementsByClassName('aq-overlay-backdrop')[0].setAttribute('style', 'display:none');
      }

    ionViewDidLoad() {
    }

    ionViewDidEnter() {
        
    }

}
