
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { StorageService } from "../../../providers/StorageService";
import { STHomeService } from "../STHomeService";
import { FILE_SERVE_URL, isLogin, USER_INFO } from '../../../providers/Constants';
import { NativeService } from './../../../providers/NativeService';
import { HomeRiskManagementPage } from './../HomeRiskManagement/HomeRiskManagement';
import { HomeBonusPage } from './../HomeBonus/HomeBonus';
import { HomeNoticePage } from './../HomeNotice/HomeNotice';
import { HomeSignPage } from '../HomeSign/HomeSign';
import { ProductDetailsPage } from './../../STProduct/ProductDetails/ProductDetails';
import { EnterpriseNewsPage } from './../../STNews/EnterpriseNews/EnterpriseNews';


@Component({
    selector: 'Page-Homepage',
    templateUrl: 'Homepage.html',
})
export class HomepagePage {
    
    constructor(public navCtrl: NavController, private _STHomeService: STHomeService, public _StorageService: StorageService,public nativeService:NativeService) {
    
    }

    ionViewDidEnter() {
        
    }
    riskmanagement(){
        this.navCtrl.push(HomeRiskManagementPage);
    }
    homebonus(){
        this.navCtrl.push(HomeBonusPage);
    }
    notice(){
        this.navCtrl.push(HomeNoticePage);
    }
    homesign(){
        this.navCtrl.push(HomeSignPage);
    }
    product(){
        this.navCtrl.push(ProductDetailsPage);
    }
    news(){
        this.navCtrl.push(EnterpriseNewsPage);
    }
}
