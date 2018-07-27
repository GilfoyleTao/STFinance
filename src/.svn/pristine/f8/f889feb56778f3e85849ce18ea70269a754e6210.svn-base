
import { Injectable } from "@angular/core";

@Injectable()
export class Validators {

  static Phone(phone): boolean {
    let ValidatePhone = /^1[3,4,5,7,8]\d{9}$/;
    if (!ValidatePhone.test(phone)) {
      return false;
    } else {
      return true;
    }
  }
  
  static RedemptionMoney(redemptionMoney): boolean {
    let ValidateredemptionMoney = /^\d*\.{0,9}\d{0,9}$/;
    if (!ValidateredemptionMoney.test(redemptionMoney)) {
      return false;
    } else {
      return true;
    }
  }
}

  
