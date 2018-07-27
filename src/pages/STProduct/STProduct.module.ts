//Base
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { STProductPage } from './STProduct';
import { ProductListPage } from './ProductList/ProductList';

//Service
import { StorageService } from './../../providers/StorageService';
import { STProductService } from './STProductService';
import { ProductDetailsPage } from './ProductDetails/ProductDetails';
import { ProductPaymentPage } from './ProductPayment/ProductPayment';
import { ProductIncomeDisplayPage } from './ProductIncomeDisplay/ProductIncomeDisplay';
import { ProductCouponsPage } from './ProductCoupons/ProductCoupons';
import { ProductRiskStatementPage } from './ProductRiskStatement/ProductRiskStatement';
import { ProductServiceAgreementPage } from './ProductServiceAgreement/ProductServiceAgreement';




@NgModule({
    declarations: [
        STProductPage,
        ProductListPage,
        ProductDetailsPage,
        ProductPaymentPage,
        ProductIncomeDisplayPage,
        ProductCouponsPage,
        ProductRiskStatementPage,
        ProductServiceAgreementPage
    ],
    imports: [

IonicPageModule.forChild(STProductPage)
    ],
    entryComponents: [
        STProductPage,
        ProductListPage,
        ProductDetailsPage,
        ProductPaymentPage,
        ProductIncomeDisplayPage,
        ProductCouponsPage,
        ProductRiskStatementPage,
        ProductServiceAgreementPage
    ],
    exports: [
        STProductPage
    ],
    providers: [STProductService, StorageService]
})

export class STProductModule { }
