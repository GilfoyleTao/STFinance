import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { STProductService } from "../STProductService";

@Component({
    selector: 'Page-ProductIncomeDisplay',
    templateUrl: 'ProductIncomeDisplay.html',
})
export class ProductIncomeDisplayPage {
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, private _STProductService: STProductService) {
       
    }


    ionViewDidLoad() {

    }


    ionViewDidEnter() {
       
    }


}
