import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//service
import { STLoginService } from "../STLoginService";
import { Validators } from './../../../providers/Validators';
import { AlertService } from '../../../providers/Alert.service';
import { FillinpasswordPage } from './../Fillinpassword/Fillinpassword';
import { RegisterPage } from '../Register/Register';
import { StorageService } from "../../../providers/StorageService";

@Component({
    selector: 'Page-Login',
    templateUrl: 'Login.html',
    
})
export class LoginPage {
    
    mobile:string;
    constructor(public navCtrl: NavController, public _AlertService: AlertService,public _StorageService: StorageService, private _STLoginService: STLoginService) {
    }

    ionViewDidLoad() {
        //this.mobile=this._StorageService.read("mobile");
    }

    ionViewDidEnter() {
        
    }

    goFillinpassword()
    {
       
        if(this.mobile=="15942644799"||this.mobile=="15041181766"||this.mobile=="18742021551"||this.mobile=="18851204600")
        { 
            this.navCtrl.push(FillinpasswordPage);
            this._StorageService.write("mobile",this.mobile);
        }
        else
        {
            this.navCtrl.push(RegisterPage);
            this._StorageService.write("mobile",this.mobile);
        }
    }
   
}

