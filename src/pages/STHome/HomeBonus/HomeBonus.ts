import { STHomeService } from './../STHomeService';
import { Component } from '@angular/core';
import { NavController, ModalController,AlertController } from 'ionic-angular';
import { NativeService } from './../../../providers/NativeService';

@Component({
    selector: 'Page-HomeBonus',
    templateUrl: 'HomeBonus.html',
})
export class HomeBonusPage {
 
    ok:boolean;
    two:boolean;

    constructor(public navCtrl: NavController, public _NativeService: NativeService, public _STHomeService: STHomeService) {
      this.two=false;
    
    
    }
    ionViewDidLoad() {

    }
    ionViewDidEnter() {

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

}
