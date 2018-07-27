import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController, ActionSheetController } from 'ionic-angular';
import { StorageService } from "../../../providers/StorageService";
// import { STMineService } from "../STMineService";
import { HomepagePage } from './../../STHome/Homepage/Homepage';
// import { Utils } from './../../../providers/Utils';
import { NativeService } from './../../../providers/NativeService';
import { isLogin, USER_INFO, USER_ID } from './../../../providers/Constants';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ModifyMineInfoPage } from './../ModifyMineInfo/ModifyMineInfo';
import { LoginPage } from '../../STLogin/Login/Login';

@Component({
  selector: 'Page-MineInfo',
  templateUrl: 'MineInfo.html',
})
export class MineInfoPage {
  onename:string;
  onenum:string;
  constructor(public navCtrl: NavController,public navParams: NavParams,public viewCtrl: ViewController,public modalCtrl: ModalController,public actionSheetCtrl: ActionSheetController,public nativeService: NativeService,public _StorageService: StorageService,public alerCtrl: AlertController) {

  }
  ionViewDidLoad() {
    this.newMethod();
  }
  private newMethod() {
    this.onename = this._StorageService.read("name");
    this.onenum = this._StorageService.read("num");
  }

  ionViewDidEnter() {
    this.newMethod_1();
  }
  private newMethod_1() {
    this.onename = this._StorageService.read("name");
    this.onenum = this._StorageService.read("num");
  }

  goModifyMIneInfo()
  {
    this.navCtrl.push(ModifyMineInfoPage);
  }
  
  goLogin()
  {
    this.navCtrl.setRoot(LoginPage);
  }

}