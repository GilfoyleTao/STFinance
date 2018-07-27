import { Injectable } from '@angular/core';
import { Response, } from '@angular/http';
import { Observable } from "rxjs";
import { HttpService } from "../../providers/HttpService";


@Injectable()
export class STPropertyService {
    

    constructor(public httpService: HttpService) {

    }
    
}
