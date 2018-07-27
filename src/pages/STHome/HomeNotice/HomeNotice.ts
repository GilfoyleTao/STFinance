import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { STHomeService } from "../STHomeService";
import { HomeNoticeDetailsPage } from './../HomeNoticeDetails/HomeNoticeDetails';


@Component({
    selector: 'Page-HomeNotice',
    templateUrl: 'HomeNotice.html',
})
export class HomeNoticePage {
    
    pg:boolean;

    constructor(public navCtrl: NavController,public navParams: NavParams,private _STHomeService: STHomeService) {
       
    }

    ionViewDidEnter() {
        

    }

    nobg(){
        this.pg=false;
        }
    bg(){
        this.pg=true;
            }
    detail(){
        this.navCtrl.push(HomeNoticeDetailsPage);
    }



}
