import { MyApp } from './../../../app/app.component';
import { Component } from "@angular/core";
import { NavController, ModalController, AlertController } from "ionic-angular";

@Component({
  selector: 'page-Overlay',
  templateUrl: 'Overlay.html'
})
export class OverlayPage {

  constructor(private navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ionViewDidLoad() {

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


