import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from "../../providers/HttpService";


@Injectable()
export class STLoginService {

    constructor(public httpService: HttpService) {

    }
    
}
