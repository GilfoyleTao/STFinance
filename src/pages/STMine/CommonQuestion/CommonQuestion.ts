import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { STMineService } from "../STMineService";



@Component({
    selector: 'Page-CommonQuestion',
    templateUrl: 'CommonQuestion.html',
})
export class CommonQuestionPage {

    constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, public modalCtrl: ModalController,private _STMineService: STMineService, public params: NavParams) {
        
    }
    ionViewDidLoad() {
    }
    ionViewDidEnter() { 
    }
    isShow:boolean;
    change(){
        this.isShow=!this.isShow;
    }
    
}
