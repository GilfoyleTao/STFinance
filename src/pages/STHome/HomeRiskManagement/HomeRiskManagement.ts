import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FILE_SERVE_URL } from '../../../providers/Constants';
import { STHomeService } from "../STHomeService";


@Component({
    selector: 'Page-HomeRiskManagement',
    templateUrl: 'HomeRiskManagement.html',
})
export class HomeRiskManagementPage {

    constructor(public navCtrl: NavController,public navParams: NavParams,private _STHomeService: STHomeService) {
    }


    ionViewDidLoad() {

    }


    ionViewDidEnter() {

    }

    
}
