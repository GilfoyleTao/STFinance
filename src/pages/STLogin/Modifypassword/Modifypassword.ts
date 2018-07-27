import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
// service
import { StorageService } from "../../../providers/StorageService";
import { STLoginService } from "../STLoginService";
import { AlertService } from '../../../providers/Alert.service';
import { Utils } from './../../../providers/Utils';
import { LoginPage } from '../Login/Login';

@Component({
    selector: 'Page-Modifypassword',
    templateUrl: 'Modifypassword.html',
})
export class ModifypasswordPage {
    back:boolean
    twomobile:string;
    constructor(public navCtrl: NavController,public navParams: NavParams,public _AlertService: AlertService,private _STLoginService: STLoginService,public _StorageService: StorageService,public alertCtrl:AlertController,) {
        this.back=false;
    }
    ionViewDidEnter() {
        this.twomobile = this._StorageService.read("mobile");
    }
    ionViewDidLoad() {
        this.twomobile = this._StorageService.read("mobile");
      }
    
      Open(OverlayId) {
        document.getElementById(OverlayId).setAttribute('style', 'display:block');
        document.getElementsByClassName('aq-overlay-backdrop')[0].setAttribute('style', 'display:block');
        this.back=true
      }
        
    
        en(){
          let overlay = document.getElementsByClassName('aq-common-overlay');
          for (let i = 0; i < overlay.length; i++) {
            overlay[i].setAttribute('style', 'display:none');
          }
          document.getElementsByClassName('aq-overlay-backdrop')[0].setAttribute('style', 'display:none');
          this.navCtrl.push(LoginPage); 
          } 
       
      }



   
        
      

