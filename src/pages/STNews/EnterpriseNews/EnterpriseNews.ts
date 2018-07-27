import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
//import { STHomeService } from './../STHomeService';
import { Component } from '@angular/core';


import { STNewsService } from './../STNewsService';

import { EnterpriseNewsDetailPage } from './../EnterpriseNewsDetail/EnterpriseNewsDetail';
import { NativeService } from './../../../providers/NativeService';

@Component({
    selector: 'Page-EnterpriseNews',
    templateUrl: 'EnterpriseNews.html',
})
export class EnterpriseNewsPage {

    customerID: any = '2018041214154754017989c2aceab60';

    PageNum: number = 1;
    RecordNum: number = 6;
    Category: number;
    Imgurl: any;
    Categorys: any;
    Datamodul: any;

    NewsID: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public _STNewsService: STNewsService) {
        this.Categorys = [
            { 'id': 0, 'CategoryName': '热门', 'Selected': true },
            { 'id': 1, 'CategoryName': '冷门', 'Selected': false },
            { 'id': 2, 'CategoryName': '推荐', 'Selected': false },
            { 'id': 3, 'CategoryName': '八卦', 'Selected': false },
            { 'id': 4, 'CategoryName': '娱乐', 'Selected': false },
        ]


    }

    ionViewDidLoad() {

    }

    ionViewDidEnter() {
        this.getEnterpriseNewsListByTab(4)
    }
    // 获取新闻列表
    getEnterpriseNewsListByTab(Category) {
        this._STNewsService.getEnterpriseNewsListByTab(this.customerID, this.PageNum, this.RecordNum, Category).subscribe((data: any) => {
            if (data.Code == 0) {
                this.Datamodul = data.Data;
                console.log(this.Datamodul);
            }
        });

    }
    go(NewsID) {
        this.navCtrl.push(EnterpriseNewsDetailPage, { NewsID: NewsID });

    }
    tabs(item) {
        this.getEnterpriseNewsListByTab(item.id)
        if (item.Selected) {

        } else {
            this.Categorys.forEach(item => {
                item.Selected = false;
            });
            item.Selected = !item.Selected;
        }


    }
}
