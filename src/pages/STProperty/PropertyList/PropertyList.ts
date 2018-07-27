
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController, } from 'ionic-angular';
import { StorageService } from "../../../providers/StorageService";
import { STPropertyService } from "../STPropertyService";
import { USER_INFO, isLogin } from './../../../providers/Constants';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { PropertyDetailsPage } from '../PropertyDetails/PropertyDetails';
import { PropertyWithdrawPage } from './../PropertyWithdraw/PropertyWithdraw';

@Component({
    selector: 'Page-PropertyList',
    templateUrl: 'PropertyList.html',
})
export class PropertyListPage {
    money:number;
    quanbu:number;
    constructor(public navCtrl: NavController, public alerCtrl: AlertController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, private _STPropertyService: STPropertyService, public _StorageService: StorageService, ) {

    }
    ionViewDidLoad() {
        /*this.money = 500;
        this.quanbu = 0;*/
    }

    ionViewDidEnter() {
        /*this.quanbu = this._StorageService.read("quanbu");
        this.money = this.money - this.quanbu;
        if (this.money < 0){
            this.money = 0;
        }*/
    }
    
    goPropertyList()
    {
        this.navCtrl.push(PropertyDetailsPage,{item:true});
    }
    goPropertyList2()
    {
        this.navCtrl.push(PropertyDetailsPage,{item:false});
    }
    goPropertyWithdraw()
    {
        this.navCtrl.push(PropertyWithdrawPage);
    }
    
}
