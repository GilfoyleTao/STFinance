// Base
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
//Service
import { StorageService } from './../../providers/StorageService';
import { STMineService } from './STMineService';
//Pages
import { STMinePage } from './STMine';
import { MineCenterPage } from './MineCenter/MineCenter';
import {MineInfoPage} from './MineInfo/MineInfo';
import { MineBankCardPage } from './MineBankCard/MineBankCard';
import { MineCouponPage } from './MineCoupon/MineCoupon';
import { AboutAppPage } from './AboutApp/AboutApp';
import { CommonQuestionPage } from './CommonQuestion/CommonQuestion';
import { MineCouponDetailPage } from './MineCouponDetail/MineCouponDetail';
import { MineFeedbackPage } from './MineFeedback/MineFeedback';
import { ModifyMineInfoPage } from './ModifyMineInfo/ModifyMineInfo';
import { FillinBankCardPage } from './FillinBankCard/FillinBankCard';
import { OverlayPage } from './Overlay/Overlay';
import { RelieveBankCardPage } from './RelieveBankCard/RelieveBankCard';


@NgModule({
    declarations: [
        STMinePage,
        MineCenterPage,
        MineInfoPage,
        MineBankCardPage,
        MineCouponPage,
        AboutAppPage,
        CommonQuestionPage,
        MineCouponDetailPage,
        MineFeedbackPage,
        ModifyMineInfoPage,
        FillinBankCardPage,
        OverlayPage,
        RelieveBankCardPage,
      

    ],
    imports: [
   
IonicPageModule.forChild(STMinePage)
    ],
    entryComponents: [
        STMinePage,
        MineCenterPage,
        MineInfoPage,
        MineBankCardPage,
        MineCouponPage,
        AboutAppPage,
        CommonQuestionPage,
        MineCouponDetailPage,
        MineFeedbackPage,
        ModifyMineInfoPage,
        FillinBankCardPage,
        OverlayPage,
        RelieveBankCardPage,
       
    ],
    exports: [
        STMinePage
    ],
    providers: [STMineService, StorageService]
})

export class STMineModule { }
