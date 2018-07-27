
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'STLoginPage',
    template: ''
})
export class STLoginPage {
    rootPage: any;

    constructor(public navCtrl: NavController) {
        this.rootPage = STLoginPage;
    }
}
