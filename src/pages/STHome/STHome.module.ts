// Base
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../Component/components.module";
//Service
import { StorageService } from './../../providers/StorageService';
import { STHomeService } from './STHomeService';
//Pages
import { STHomePage } from './STHome';
import { HomepagePage } from './Homepage/Homepage';

import { HomeRiskManagementPage } from './HomeRiskManagement/HomeRiskManagement';
import { HomeBonusPage } from './HomeBonus/HomeBonus';
import { HomeNoticePage } from './HomeNotice/HomeNotice';
import { HomeSignPage } from './HomeSign/HomeSign';
import { HomeNoticeDetailsPage } from './HomeNoticeDetails/HomeNoticeDetails';
import { EnterpriseNewsPage } from '../STNews/EnterpriseNews/EnterpriseNews';

@NgModule({
    declarations: [
        HomepagePage,
        STHomePage,
        HomeRiskManagementPage,
        HomeBonusPage,
        HomeNoticePage,
        HomeSignPage,
        HomeNoticeDetailsPage,
        EnterpriseNewsPage,
    ],
    imports: [
        IonicPageModule.forChild(STHomePage),
        ComponentsModule
    ],
    entryComponents: [
        HomepagePage,
        HomeRiskManagementPage,
        HomeBonusPage,
        HomeNoticePage,
        HomeSignPage,
        HomeNoticeDetailsPage,
        EnterpriseNewsPage
    ],
    exports: [
        STHomePage
    ],
    providers: [STHomeService, StorageService]
})

export class STHomeModule { }
