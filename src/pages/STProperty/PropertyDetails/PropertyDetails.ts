
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StorageService } from "../../../providers/StorageService";
import { STPropertyService } from "../STPropertyService";
import { USER_INFO, isLogin } from './../../../providers/Constants';
import { Validators } from '../../../providers/Validators';
import { AlertService } from '../../../providers/Alert.service';

@Component({
    selector: 'Page-PropertyDetails',
    templateUrl: 'PropertyDetails.html',
})
export class PropertyDetailsPage {
    choice: boolean;
    params: boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams, private _STPropertyService: STPropertyService,
        public _AlertService: AlertService, public _StorageService: StorageService) {
        this.params = this.navParams.get('item');
    }

    ionViewDidLoad() {

    }

    ionViewDidEnter() {

    }

    OpenOverlay89(OverlayId) {
        document.getElementById(OverlayId).setAttribute('style', 'display:block');
        document.getElementsByClassName('aq-overlay-backdrop')[0].setAttribute('style', 'display:block');
    }

    OpenOverlay90(OverlayId) {
        document.getElementById(OverlayId).setAttribute('style', 'display:block');
        document.getElementsByClassName('aq-overlay-backdrop')[1].setAttribute('style', 'display:block');
    }

    CloseOverlay89() {
        let overlay = document.getElementsByClassName('aq-common-overlay');
        for (let i = 0; i < overlay.length; i++) {
            overlay[i].setAttribute('style', 'display:none');
        }
        document.getElementsByClassName('aq-overlay-backdrop')[0].setAttribute('style', 'display:none');
    }

    CloseOverlay90() {
        let overlay = document.getElementsByClassName('aq-common-overlay');
        for (let i = 0; i < overlay.length; i++) {
            overlay[i].setAttribute('style', 'display:none');
        }
        document.getElementsByClassName('aq-overlay-backdrop')[1].setAttribute('style', 'display:none');
    }

}
