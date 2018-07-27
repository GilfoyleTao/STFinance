import { HomepagePage } from './../pages/STHome/Homepage/Homepage';
import { LoginPage } from './../pages/STLogin/Login/Login';

import { Component, ViewChild } from '@angular/core';
import { Platform, App, Nav, ToastController, Keyboard, IonicApp } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from './tabs/tabs';
import { NativeService } from './../providers/NativeService';
import { HomeAdvertisementPage } from './../pages/STHome/HomeAdvertisement/HomeAdvertisement';
import { RegisterPage } from '../pages/STLogin/Register/Register';
import { ModifypasswordPage } from '../pages/STLogin/Modifypassword/Modifypassword';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  //rootPage = ModifypasswordPage;

  backButtonPressed: boolean = false; //用于判断返回键是否触发
  @ViewChild('myNav') nav: Nav;
  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public nativeService: NativeService,
    public App: App,
    public toastCtrl: ToastController,
    public keyboard: Keyboard,
    public ionicApp: IonicApp,
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      statusBar.overlaysWebView(true);
      splashScreen.hide();
      // this.registerBackButtonAction();//注册返回按键事件
      this.registerBackButtonAction();

    });
  }
  // registerBackButtonAction() {
  //   //console.log(this.nav.getActive())
  //   /* if (!this.nativeService.isAndroid) {
  //     return;
  //   } */
  //   this.platform.registerBackButtonAction(() => {
  //     // let ActiveViewName = this.nav.getActive().instance.navCtrl.root.name;
  //     let ActiveViewName = this.nav.getActive().instance.tabs.getSelected();
  //     console.log(ActiveViewName);
  //     return ActiveViewName.canGoBack() ? ActiveViewName.popTo(TabsPage) : this.showExit()
  //     /* if (ActiveViewName != "HomepagePage") {
  //       this.nav.push(TabsPage)
  //     }
  //     else {
  //       this.platform.exitApp();
  //     } */
  //   }, 1)
  // }

  // 双击退出程序
  // showExit() {
  //   if (this.backButtonPressed) {
  //     this.platform.exitApp();
  //   } else {
  //     this.nativeService.showToast('再按一次退出应用');
  //     this.backButtonPressed = true;
  //     setTimeout(() => {
  //       this.backButtonPressed = false;
  //     }, 2000)
  //   }
  // }

  registerBackButtonAction() {
    this.platform.registerBackButtonAction(() => {
      if (this.keyboard.isOpen()) {
        //按下返回键时，先关闭键盘
        this.keyboard.close();
        return;
      };
      //如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
      // this.ionicApp._toastPortal.gaetActive() || this.ionicApp._loadingPortal.getActive() || this.ionicApp._overlayPortal.getActive()
      //不写this.ionicApp._toastPortal.getActive()是因为连按2次退出
      // let activePortal = this.ionicApp._modalPortal.getActive() || this.ionicApp._overlayPortal.getActive();
      let loadingPortal = this.ionicApp._loadingPortal.getActive();
      // if (activePortal) {
      //   //其他的关闭
      //   activePortal.dismiss().catch(() => {
      //   });
      //   activePortal.onDidDismiss(() => {
      //   });
      //   return;
      // }
      if (loadingPortal) {
        //loading的话，返回键无效
        return;
      }
      let activeVC = this.nav.getActive();
      let page = activeVC.instance;

      if (page instanceof LoginPage) {
        // this.platform.exitApp();
        this.nav.push(TabsPage,{Sign:0});
        return;
      }
      // let tabs = activeVC.instance.tabs;
      // let activeNav = tabs.getSelected();
      // return activeNav.canGoBack() ? activeNav.pop() : this.showExit();//另外两种方法在这里将this.showExit()改为其他两种的方法的逻辑就好。
    }, 1);
  }



  showExit() {
    if (this.backButtonPressed) { //当触发标志为true时，即2秒内双击返回按键则退出APP
      this.platform.exitApp();
    } else {
      this.toastCtrl.create({
        message: '再按一次退出应用',
        duration: 2000,
        position: 'bottom',
        cssClass: 'text-align: center'
      }).present();
      this.backButtonPressed = true;
      setTimeout(() => this.backButtonPressed = false, 2000);//2秒内没有再次点击返回则将触发标志标记为false
    }
  }



}

