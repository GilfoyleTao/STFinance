//Base 根模块，告诉ionic如何组装应用
//引入 angular以及ionic 的系统模块
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
//引入根组件
import { MyApp } from './app.component';
//Providers
import { HttpService } from './../providers/HttpService';
import { NativeService } from './../providers/NativeService';
import { Utils } from "../providers/Utils";
import { GlobalData } from './../providers/GlobalData';
//Modules  页面自定义组件
import { TabsModule } from './tabs/tabs.module';
import { STHomeModule } from './../pages/STHome/STHome.module';
import { STProductModule } from './../pages/STProduct/STProduct.module';
import { STPropertyModule } from './../pages/STProperty/STProperty.module';
import { STMineModule } from './../pages/STMine/STMine.module';
import { STLoginModule } from './../pages/STLogin/STLogin.module';
//Others ionic打包成app后配置的启动画面以及导航条的服务（不用管
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//NativeService
import { Camera } from "@ionic-native/camera";//相机
import { FileTransfer } from '@ionic-native/file-transfer';//文件上传
import { File } from '@ionic-native/file';//访问文件夹
import { ImagePicker } from '@ionic-native/image-picker'; //图片选择
import { STNewsModule } from '../pages/STNews/STNews.module';

@NgModule({
  declarations: [MyApp],    /*声明组件*/
  imports: [    /*引入的模块，依赖的模块*/

    TabsModule,
    HttpModule,
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '', // 配置返回按钮的文字  
      backButtonIcon: 'ios-arrow-back-outline' // 配置返回按钮的图标
    }),
    STLoginModule,
    STHomeModule,
    STProductModule,
    STPropertyModule,
    STMineModule,
    STNewsModule,
  ],
  bootstrap: [IonicApp],   /*启动的模块*/
  entryComponents: [MyApp], /*不包含模块？*/
  providers: [  /*配置服务*/
    GlobalData,
    StatusBar,
    SplashScreen,
    Camera,
    File,
    FileTransfer,
    ImagePicker,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpService,
    NativeService,
    Utils,
    
  ]
})
export class AppModule { }
