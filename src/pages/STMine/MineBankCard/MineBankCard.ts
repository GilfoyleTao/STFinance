import { NativeService } from './../../../providers/NativeService';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { STMineService } from "../STMineService";
import { USER_INFO, isLogin } from './../../../providers/Constants';
import { StorageService } from "../../../providers/StorageService";
import { FillinBankCardPage } from './../FillinBankCard/FillinBankCard';


@Component({
    selector: 'Page-MineBankCard',
    templateUrl: 'MineBankCard.html',
})
export class MineBankCardPage {
     constructor(public navCtrl: NavController,public navParams: NavParams,private _STMineService: STMineService,public _StorageService: StorageService,public alertCtrl: AlertController,public nativeService: NativeService) {
        
   }

    ionViewDidLoad() {

    }

    ionViewDidEnter() {
        
    }
    goFillinBankCard()
    {
        this.navCtrl.push(FillinBankCardPage);
    }

  
}
