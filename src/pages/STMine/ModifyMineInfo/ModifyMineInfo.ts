import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//services
import { StorageService } from "../../../providers/StorageService";
import { STMineService } from "../STMineService";
import { AlertService } from '../../../providers/Alert.service';
import { MineInfoPage } from './../MineInfo/MineInfo';
@Component({
  selector: 'Page-ModifyMineInfo',
  templateUrl: 'ModifyMineInfo.html',
})
export class ModifyMineInfoPage {
  name:string;
  num:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _STMineService: STMineService, public _StorageService: StorageService, public _AlertService: AlertService) {
    
  }
  ionViewDidLoad() {
    this.name=this._StorageService.read("name");
    this.num=this._StorageService.read("num");
  }
  ionViewDidEnter() {
    this.name=this._StorageService.read("name");
    this.num=this._StorageService.read("num");
  }
  goMineInfo(){
    this.navCtrl.push(MineInfoPage);
    this._StorageService.write("name",this.name);
    this._StorageService.write("num",this.num);
  }

  // OpenOverlay(OverlayId) {
    // document.getElementById(OverlayId).setAttribute('style', 'display:block');
    // document.getElementsByClassName('aq-overlay-backdrop')[0].setAttribute('style', 'display:block');
    // this._StorageService.write("name",this.name);
  // }

// CloseOverlay() {
    // let overlay = document.getElementsByClassName('aq-common-overlay');
    // overlay[0].setAttribute('style', 'display:none');
    // document.getElementsByClassName('aq-overlay-backdrop')[0].setAttribute('style', 'display:none');
  // }

  

}