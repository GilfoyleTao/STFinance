// Base
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
//Service
import { StorageService } from './../../providers/StorageService';
import { STLoginService } from './STLoginService';
import { AlertService } from './../../providers/Alert.service';
//Pages
import { STLoginPage } from './STLogin';
import { LoginPage } from './Login/Login';
import { FillinpasswordPage } from './Fillinpassword/Fillinpassword';
import { RegisterPage } from './Register/Register';
import { ModifypasswordPage } from './Modifypassword/Modifypassword';





@NgModule({
    declarations: [
        LoginPage,
        STLoginPage,
        FillinpasswordPage,
        RegisterPage,
        ModifypasswordPage,
      
    ],
    imports: [

    IonicPageModule.forChild(STLoginPage)
    ],
    entryComponents: [
        LoginPage,
        FillinpasswordPage,
        RegisterPage,
        ModifypasswordPage,
        
    ],
    exports: [
        STLoginPage
    ],
    providers: [STLoginService, StorageService, AlertService]
})

export class STLoginModule { }
