import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from "../../providers/HttpService";
import { USER_INFO } from './../../providers/Constants';
import { StorageService } from '../../providers/StorageService';

@Injectable()
export class STMineService {
   
    constructor(public httpService: HttpService, public _StorageService: StorageService) {
        
    }
    
}