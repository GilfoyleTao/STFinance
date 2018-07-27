import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { STMineService } from './../STMineService';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
    selector: 'Page-Authentication',
    templateUrl: 'Authentication.html',
})
export class AuthenticationPage {
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, public _STMineService: STMineService, public alertCtrl: AlertController) {
        
    }

    ionViewDidLoad() {
    }

    ionViewDidEnter() {

    }   

}
