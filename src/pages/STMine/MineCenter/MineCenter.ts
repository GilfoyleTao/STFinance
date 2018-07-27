import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController, AlertController } from 'ionic-angular';
import { StorageService } from "../../../providers/StorageService";
import { STMineService } from "../STMineService";
import { FILE_SERVE_URL, isLogin } from './../../../providers/Constants';
import { MineBankCardPage } from '../MineBankCard/MineBankCard';
import { TabsPage } from './../../../app/tabs/tabs';
import { MineInfoPage } from './../MineInfo/MineInfo';
import { MineCouponPage } from './../MineCoupon/MineCoupon';
import { AboutAppPage } from '../AboutApp/AboutApp';
import { CommonQuestionPage } from '../CommonQuestion/CommonQuestion';
import { MineFeedbackPage } from '../MineFeedback/MineFeedback';
import { OverlayPage } from './../Overlay/Overlay';
import { HomeRiskManagementPage } from '../../STHome/HomeRiskManagement/HomeRiskManagement';
import { RelieveBankCardPage } from './../RelieveBankCard/RelieveBankCard';

@Component({
    selector: 'Page-MineCenter',
    templateUrl: 'MineCenter.html',
})
export class MineCenterPage {
    onename:string;
    ttname:string;
    constructor(public alertCtrl:AlertController,public navCtrl: NavController, private _STMineService: STMineService, public _StorageService: StorageService) {
    }

    ionViewDidLoad() {
        this.onename=this._StorageService.read("name");
    }

    ionViewDidEnter() {
        this.onename=this._StorageService.read("name");

    }
   
    goset(){
        this.navCtrl.push(MineInfoPage);
    }


    goMineBankCard()
    {
        this.navCtrl.push(MineBankCardPage);
    }

    goMineCoupon()
    {
        this.navCtrl.push(MineCouponPage);
    }
    
    goMineFeedback()
    {
        this.navCtrl.push(MineFeedbackPage);
    }
    goCommonQuestion()
    {
        this.navCtrl.push(CommonQuestionPage);
    }
    goll()
    {
        this.navCtrl.push(OverlayPage); 
    }

    goAboutApp()
    {
        this.navCtrl.push(AboutAppPage);
    }

    goRiskManagement()
    {
        this.navCtrl.push(HomeRiskManagementPage);
    }

    gYYorenzheng()
    {
        this.ttname=this._StorageService.read("truename");
        if(this.ttname!=null){
          this.presentAlert(" ","不可重复认证");
        }else{
          this.navCtrl.push(RelieveBankCardPage);
        }
    }
    presentAlert(message: string, title?: string) {
        const alert = this.alertCtrl.create(
          {
            title,
            subTitle: message,
            buttons: [
              {
                text: '确认'
              }
            ]
          });
        return alert.present();
      }


    gorenzheng(OverlayId) {
        document.getElementById(OverlayId).setAttribute('style', 'display:block');
        document.getElementsByClassName('aq-overlay-backdrop')[1].setAttribute('style', 'display:block');
      }


   YES() {
    let overlay = document.getElementsByClassName('aq-common-overlay');
    for (let i = 0; i < overlay.length; i++) {
      overlay[i].setAttribute('style', 'display:none');
    }
    document.getElementsByClassName('aq-overlay-backdrop')[1].setAttribute('style', 'display:none');
      }

    logIn(username: HTMLInputElement, password : HTMLInputElement) {
        if(username.value.length > 0) {
            console.log(username.value);
        }
        if(password.value.length > 0 ) {
          console.log(password.value);
        }
        if(username.value == 'test' && password.value == '123123') {
          window.localStorage.setItem('username',username.value);//保存登录时数据
          this.navCtrl.setRoot(TabsPage);//跳转到登录后的页面
        }
      }
    
     
   
}
