import { Injectable } from '@angular/core';
import { Response, } from '@angular/http';
import { Observable } from "rxjs";



import { StorageService } from './../../providers/StorageService';
import { HttpService } from './../../providers/HttpService';

@Injectable()
export class STNewsService {


    constructor(public httpService: HttpService, public _StorageService: StorageService) {
    }
    getEnterpriseNewsListByTab(customerID: string, PageNum: number, RecordNum: number, Category: number): any {
        let url = 'QSTMainPart/getEnterpriseNewsListByTab';
        let paramMap = {
            customerID: customerID,
            PageNum: PageNum,
            RecordNum: RecordNum,
            Category: Category
        };
        return this.httpService.getWebApi(url, paramMap).map((res: Response) => res);
    }

    getEnterpriseNewsDetailByTab(NewsID: string): any {
        let url = 'QSTMainPart/getNewsDetail';
        let paramMap = {
            NewsID: NewsID
        }
        return this.httpService.getWebApi(url, paramMap).map((res: Response) => res);
    }
}
