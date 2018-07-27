// Base
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
//Service
import { StorageService } from './../../providers/StorageService';
import { STPropertyService } from './STPropertyService';
//Pages
import { STPropertyPage } from './STProperty';
import { PropertyListPage } from './PropertyList/PropertyList';
import { PropertyDetailsPage } from './PropertyDetails/PropertyDetails';
import { PropertyWithdrawPage } from './PropertyWithdraw/PropertyWithdraw';
//import { ProductIncomeDisplayPage } from '../STProduct/ProductIncomeDisplay/ProductIncomeDisplay';

@NgModule({
    declarations: [
        STPropertyPage,
        PropertyListPage,
        PropertyDetailsPage,
        PropertyWithdrawPage,
        //ProductIncomeDisplayPage,
    ],
    imports: [
        IonicPageModule.forChild(STPropertyPage)
    ],
    entryComponents: [
        STPropertyPage,
        PropertyListPage,
        PropertyDetailsPage,
        PropertyWithdrawPage,
        //ProductIncomeDisplayPage,
    ],
    exports: [
        STPropertyPage
    ],
    providers: [STPropertyService, StorageService]
})

export class STPropertyModule { }
