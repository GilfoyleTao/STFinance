import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

//services
import { STLoginService } from "../STLoginService";
import { AlertService } from '../../../providers/Alert.service';
import { StorageService } from "../../../providers/StorageService";
import { ModifypasswordPage } from './../Modifypassword/Modifypassword';
import { TabsPage } from '../../../app/tabs/tabs';
//model

@Component({
    selector: 'Page-Fillinpassword',
    templateUrl: 'Fillinpassword.html',
})
export class FillinpasswordPage {
    onemobile:string;
    password:string;
    constructor(public navCtrl: NavController, public navParams: NavParams, private _STLoginService: STLoginService, public _AlertService: AlertService, public _StorageService: StorageService,public alertCtrl:AlertController,) {
        
    }

    ionViewDidEnter() {
        this.onemobile = this._StorageService.read("mobile");
    }
    ionViewDidLoad() {
        this.onemobile = this._StorageService.read("mobile");
      }

      
    goTabsPage (OverlayId) 
    {
        if((this.onemobile=="15942644799"&&this.password=="linning0802")||(this.onemobile=="15041181766"&&this.password=="123")||(this.onemobile=="18742021551"&&this.password=="dt888888")||(this.onemobile=="18851204600"&&this.password=="123456"))
        {
            this.navCtrl.push(TabsPage);
        }
        else{ 
            document.getElementById(OverlayId).setAttribute('style', 'display:block');
            document.getElementsByClassName('aq-overlay-backdrop')[0].setAttribute('style', 'display:block');
           
        }
    }

    
    
    
      enen() {
        let overlay = document.getElementsByClassName('aq-common-overlay');
        for (let i = 0; i < overlay.length; i++) {
          overlay[i].setAttribute('style', 'display:none');
        }
        document.getElementsByClassName('aq-overlay-backdrop')[0].setAttribute('style', 'display:none');
      }
    

   

    goModifypassword()
    {
        this.navCtrl.push(ModifypasswordPage);
        this._StorageService.write("mobile",this.onemobile);
    }

}
