
import { Component, ViewChild } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Tabs} from "ionic-angular";
import { HomepagePage } from './../../pages/STHome/Homepage/Homepage';
import { ProductListPage } from '../../pages/STProduct/ProductList/ProductList';
import { PropertyListPage } from './../../pages/STProperty/PropertyList/PropertyList';
import { MineCenterPage } from './../../pages/STMine/MineCenter/MineCenter';


@Component({
  selector: "page-tabs",
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabs: Tabs;
  STHomeRoot: any = HomepagePage;
  STProductRoot: any = ProductListPage;
  STPropertyRoot: any = PropertyListPage;
  STMineRoot: any = MineCenterPage;
  TabIndex:number;
  constructor(public navCtrl: NavController,public navParams:NavParams) {
    this.TabIndex = (this.navParams.get('Sign')?this.navParams.get("Sign"):0);
  }
  ionViewDidEnter(){
    this.tabs.select(this.TabIndex);
    console.log();
  }
}

