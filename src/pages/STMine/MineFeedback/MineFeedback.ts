import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { StorageService } from "../../../providers/StorageService";
import { STMineService } from "../STMineService";
import { USER_INFO } from './../../../providers/Constants';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Utils } from './../../../providers/Utils';
@Component({
    selector: 'Page-MineFeedback',
    templateUrl: 'MineFeedback.html',
})
export class MineFeedbackPage {
    
    constructor(public navCtrl: NavController,public navParams: NavParams,public viewCtrl: ViewController,public modalCtrl: ModalController,private _STMineService: STMineService,public _StorageService: StorageService,public alertCtrl: AlertController,) {
        
    }

    ionViewDidLoad() {
    }

    ionViewDidEnter() {

    }
}
