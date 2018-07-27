import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from "rxjs";
import { HttpService } from "../../providers/HttpService";


@Injectable()
export class STProductService {

    constructor(public httpService: HttpService) {

    }
    
}
