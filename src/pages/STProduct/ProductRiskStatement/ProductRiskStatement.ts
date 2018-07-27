import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { STProductService } from "../STProductService";


@Component({
    selector: 'Page-ProductRiskStatement',
    templateUrl: 'ProductRiskStatement.html',
})
export class ProductRiskStatementPage {

    
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, private _STProductService: STProductService) {
        
    }


    ionViewDidLoad() {

    }

    ionViewDidEnter() {
        
    }

   
}
