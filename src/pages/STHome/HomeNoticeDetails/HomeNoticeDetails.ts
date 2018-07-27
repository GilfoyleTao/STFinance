import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { STHomeService } from "../STHomeService";
import { HomeNoticePage } from '../HomeNotice/HomeNotice';
import { HomepagePage } from './../Homepage/Homepage';

@Component({
    selector: 'Page-HomeNoticeDetails',
    templateUrl: 'HomeNoticeDetails.html',
})
export class HomeNoticeDetailsPage {
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, private _STHomeService: STHomeService) {
       
    }
    ionViewDidLoad() {
        
    }
    ionViewDidEnter() {

    }
    back(){
        this.navCtrl.pop();
    }

}
