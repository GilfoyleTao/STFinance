
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController, } from 'ionic-angular';
import { StorageService } from "../../../providers/StorageService";
import { USER_INFO, isLogin } from './../../../providers/Constants';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { STNewsService } from './../STNewsService';

@Component({
    selector: 'Page-EnterpriseNewsDetail',
    templateUrl: 'EnterpriseNewsDetail.html',
})

export class EnterpriseNewsDetailPage {
    NewsID: any;
    NewsDetails: any;
    constructor(public navCtrl: NavController, public alerCtrl: AlertController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, private _STNewsService: STNewsService, public _StorageService: StorageService, ) {
        this.NewsID = this.navParams.get('NewsID');
        //console.log(this.NewsID);
    }

    ionViewDidLoad() {

    }
    ionViewDidEnter() {
        this.getEnterpriseNewsDetailByTab(this.NewsID);
    }
    // 获取新闻列表
    getEnterpriseNewsDetailByTab(NewsID) {
            this._STNewsService.getEnterpriseNewsDetailByTab(NewsID).subscribe((data: any) => {
                if (data.Code == 0) {
                    this.NewsDetails = data.Data;
                    console.log(this.NewsDetails);
                }
            });

        
    }
}
