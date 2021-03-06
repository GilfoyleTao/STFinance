import { Injectable } from '@angular/core';
import { ToastController, LoadingController, Platform, Loading, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalData } from "./GlobalData";
import { Camera} from "@ionic-native/camera";//相机
import { File } from '@ionic-native/file';//访问文件夹
import { ImagePicker } from '@ionic-native/image-picker'; //图片选择

@Injectable()
export class NativeService {
  private loading: Loading;
  private loadingIsOpen: boolean = false;
  constructor(private platform: Platform,
    private toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private loadingCtrl: LoadingController,
    public globalData: GlobalData,
    public camera: Camera,
    public imagePicker: ImagePicker, 
    public file: File
  ) {

  }

  log(info): void {
    console.log('%cNativeService/' + info, 'color:#C41A16');
  }
  statusBarStyleDefault(): void {
    this.statusBar.styleDefault();
  }

  /**
   * 隐藏启动页面
   */
  splashScreenHide(): void {
    this.splashScreen.hide();
  }

  /**
   * 是否真机环境
   */
  isMobile(): boolean {
    return this.platform.is('mobile') && !this.platform.is('mobileweb');
  }

  /**
   * 是否android真机环境
   */
  isAndroid(): boolean {
    return this.isMobile() && this.platform.is('android');
  }

  /**
   * 是否ios真机环境
   */
  isIos(): boolean {
    return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
  }

  alert(subTitle: string): void {
    this.alertCtrl.create({
      subTitle: subTitle,
      buttons: [{ text: '确定' }]
    }).present();
  }

  showConfirm(title, message, DisagreeText, AgreeText, AgreeCallBack, params) {
    let confirm = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: DisagreeText,
          handler: () => {

          }
        },
        {
          text: AgreeText,
          handler: () => {
            AgreeCallBack(params);
          }
        }
      ]
    });
    confirm.present();
  }

  /**
   * 统一调用此方法显示提示信息
   * @param message 信息内容
   * @param duration 显示时长
   */
  showToast(message: string = '操作完成', duration: number = 2000): void {
    this.toastCtrl.create({
      message: message,
      duration: duration,
      position: 'middle',
      showCloseButton: false
    }).present();
  };

  /**
   * 统一调用此方法显示loading
   * @param content 显示的内容
   */
  showLoading(content: string = ''): void {
    if (!this.globalData.showLoading) {
      return;
    }
    if (!this.loadingIsOpen) {
      this.loadingIsOpen = true;
      this.loading = this.loadingCtrl.create({
        content: content
      });
      this.loading.present();
      setTimeout(() => {//最长显示15秒
        this.loadingIsOpen && this.loading.dismiss();
        this.loadingIsOpen = false;
      }, 15000);
    }
  };

  /**
   * 关闭loading
   */
  hideLoading(): void {
    if (!this.globalData.showLoading) {
      this.globalData.showLoading = true;
    }
    this.loadingIsOpen && this.loading.dismiss();
    this.loadingIsOpen = false;
  };


 
/**
       * 使用cordova-plugin-camera获取照片的base64
       * @param options
       * @return {Promise<T>}
       */
      getPicture = (options) => {
        return new Promise((resolve, reject) => {
          this.camera.getPicture(Object.assign({
            sourceType: this.camera.PictureSourceType.CAMERA,//图片来源,CAMERA:拍照,PHOTOLIBRARY:相册
            destinationType: this.camera.DestinationType.DATA_URL,//返回值格式,DATA_URL:base64,FILE_URI:图片路径
            quality: 90,//保存的图像质量，范围为0 - 100
            allowEdit: true,//选择图片前是否允许编辑
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 800,//缩放图像的宽度（像素）
            targetHeight: 800,//缩放图像的高度（像素）
            saveToPhotoAlbum: false,//是否保存到相册
            correctOrientation: true//设置摄像机拍摄的图像是否为正确的方向
          }, options)).then((imageData) => {
            resolve(imageData);
          }, (err) => {
            console.log(err);
            err == 20 ? this.showToast('没有权限,请在设置中开启权限') : reject(err);
          });
        });
      };

      /**
       * 通过图库获取照片
       * @param options
       * @return {Promise<T>}
       */
      getPictureByPhotoLibrary = (options = {}) => {
        return new Promise((resolve) => {
          this.getPicture(Object.assign({
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
          }, options)).then(imageBase64 => {
            resolve(imageBase64);
          }).catch(err => {
            String(err).indexOf('cancel') != -1 ? this.showToast('取消选择图片', 1500) : this.showToast('获取        照片失败');
          });
        });
      };

      /**
       * 通过拍照获取照片
       * @param options
       * @return {Promise<T>}
       */
      getPictureByCamera = (options = {}) => {
        return new Promise((resolve) => {
          this.getPicture(Object.assign({
            sourceType: this.camera.PictureSourceType.CAMERA,
          }, options)).then(imageBase64 => {
            resolve(imageBase64);
          }).catch(err => {
            String(err).indexOf('cancel') != -1 ? this.showToast('取消拍照', 1500) : this.showToast('获取照片失败');
          });
        });
      };


}
