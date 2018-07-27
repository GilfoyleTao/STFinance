import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { STProductService } from "../STProductService";
import { ProductDetailsPage } from '../ProductDetails/ProductDetails';


@Component({
    selector: 'Page-ProductList',
    templateUrl: 'ProductList.html',
})
export class ProductListPage {

    percent1:number;
    percent2:number;
    percent3:number;
    percent4:number;
    pic1:number;
    pic2:number;
    pic3:number;
    pic4:number;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, private _STProductService: STProductService) {
        this.percent1=6.6;
        this.percent2=26.6;
        this.percent3=52.6;
        this.percent4=100;

        
        if(this.percent1<12.5){
            this.pic1=1;
        }
        else if(this.percent1 >= 12.5 && this.percent1<25){
            this.pic1=2;
        }
        else if(this.percent1 >= 25 && this.percent1<37.5){
            this.pic1=3;
        }
        else if(this.percent1 >= 37.5 && this.percent1<50){
            this.pic1=4;
        }
        else if(this.percent1 >= 50 && this.percent1<62.5){
            this.pic1=5;
        }
        else if(this.percent1 >= 62.5&& this.percent1<75){
            this.pic1=6;
        }
        else if(this.percent1 >= 75 && this.percent1<87.5){
            this.pic1=7;
        }
        else if(this.percent1 >= 87.5 && this.percent1<100){
            this.pic1=8;
        }
        else if(this.percent1 ==100){
            this.pic1=9;
        }

        if(this.percent2<12.5){
            this.pic2=1;
        }
        else if(this.percent2 >= 12.5 && this.percent2<25){
            this.pic2=2;
        }
        else if(this.percent2 >= 25 && this.percent2<37.5){
            this.pic2=3;
        }
        else if(this.percent2 >= 37.5 && this.percent2<50){
            this.pic2=4;
        }
        else if(this.percent2 >= 50 && this.percent2<62.5){
            this.pic2=5;
        }
        else if(this.percent2 >= 62.5 && this.percent2<75){
            this.pic2=6;
        }
        else if(this.percent2 >= 75 && this.percent2<87.5){
            this.pic2=7;
        }
        else if(this.percent2 >= 87.5 && this.percent2<100){
            this.pic2=8;
        }
        else if(this.percent2 ==100){
            this.pic2=9;
        }

        if(this.percent3<12.5){
            this.pic3=1;
        }
        else if(this.percent3 >= 12.5 && this.percent3<25){
            this.pic3=2;
        }
        else if(this.percent3 >= 25 && this.percent3<37.5){
            this.pic3=3;
        }
        else if(this.percent3 >= 37.5 && this.percent3<50){
            this.pic3=4;
        }
        else if(this.percent3 >= 50 && this.percent3<62.5){
            this.pic3=5;
        }
        else if(this.percent3 >= 62.5 && this.percent3<75){
            this.pic3=6;
        }
        else if(this.percent3 >= 75 && this.percent3<87.5){
            this.pic3=7;
        }
        else if(this.percent3 >= 87.5 && this.percent3<100){
            this.pic3=8;
        }
        else if(this.percent3 ==100){
            this.pic3=9;
        }

        if(this.percent4<12.5){
            this.pic4=1;
        }
        else if(this.percent4 >= 12.5 && this.percent4<25){
            this.pic4=2;
        }
        else if(this.percent4 >= 25 && this.percent4<37.5){
            this.pic4=3;
        }
        else if(this.percent4 >= 37.5 && this.percent4<50){
            this.pic4=4;
        }
        else if(this.percent4 >= 50 && this.percent4<62.5){
            this.pic4=5;
        }
        else if(this.percent4 >= 62.5&& this.percent4<75){
            this.pic4=6;
        }
        else if(this.percent4 >= 75 && this.percent4<87.5){
            this.pic4=7;
        }
        else if(this.percent4 >= 87.5 && this.percent4<100){
            this.pic4=8;
        }
        else if(this.percent4 ==100){
            this.pic4=9;
        }
        }


    ionViewDidLoad() {
   
    }

    ionViewDidEnter() {

    }

    goProductDetails(){
        this.navCtrl.push(ProductDetailsPage);
    }
}
