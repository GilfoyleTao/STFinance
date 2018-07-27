// Base
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
//Service
import { StorageService } from './../../providers/StorageService';
import { STNewsService } from './STNewsService';
//Pages
import { STNewsPage } from './STNews';
import { EnterpriseNewsDetailPage } from './EnterpriseNewsDetail/EnterpriseNewsDetail';
//import { EnterpriseNewsPage } from './EnterpriseNews/EnterpriseNews';


@NgModule({
    declarations: [
        STNewsPage,
        EnterpriseNewsDetailPage,
        //EnterpriseNewsPage
    ],
    imports: [
        IonicPageModule.forChild(STNewsPage)
    ],
    entryComponents: [
        STNewsPage,
        EnterpriseNewsDetailPage,
        //EnterpriseNewsPage
    ],
    exports: [
        STNewsPage
    ],
    providers: [STNewsService, StorageService]
})

export class STNewsModule { }
