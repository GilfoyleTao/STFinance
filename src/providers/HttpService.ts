import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable, TimeoutError } from "rxjs";
import { Utils } from "./Utils";
import { GlobalData } from "./GlobalData";
import { APP_SERVE_URL, REQUEST_TIMEOUT } from "./Constants";
import { Result } from "../model/Result";
import { NativeService } from './NativeService';
@Injectable()
export class HttpService {

    constructor(public http: Http,
        private globalData: GlobalData,
    private nativeService:NativeService) {
    }

    public request(url: string, options: RequestOptionsArgs, loadingFlag: boolean = true): Observable<Response> {
        url = Utils.formatUrl(url.startsWith('http') ? url : APP_SERVE_URL + url);
        // this.optionsAddToken(options);
        return Observable.create(observer => {
            if (loadingFlag) {
                this.nativeService.showLoading();
            }
            //console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options);
            this.http.request(url, options).timeout(REQUEST_TIMEOUT).subscribe(res => {
                if (loadingFlag) {
                    this.nativeService.hideLoading();
                }
                //console.log('%c 请求成功 %c', 'color:green', '', 'url', url, 'options', options, 'res', res);
                if (res['_body'] == '') {
                    res['_body'] = null;
                }
                observer.next(res);
            }, err => {
                this.requestFailed(url, options, err);//处理请求失败
                observer.error(err);
            });
        });
    }

    public getWebApi(url: string, paramMap: any = null, alertFlag: boolean = true, loadingFlag: boolean = true): Observable<any> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Get,
            search: HttpService.buildURLSearchParams(paramMap)
        }), loadingFlag).map((res: Response) => {
            let result: Result = res.json();
            // if (result.Code == 2) {
            //     if (alertFlag) {
            //         this.nativeService.alert(result.Message);
            //     }
            // }
            return result;
        });
    }

    public postWebApi(url: string, body: any = {}): Observable<any> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Post,
            body: body,
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        }))
        .map((res: Response) => {
            let result: Result = res.json();
            // if (result.Code != 0) {
            //     this.nativeService.alert(result.Message);
            //     return null;
            // }
            return result;
        });
    }

    public get(url: string, paramMap: any = null): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Get,
            search: HttpService.buildURLSearchParams(paramMap)
        }));
    }

    public post(url: string, body: any = {}): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Post,
            body: body,
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        }))
    }

    public postFormData(url: string, paramMap: any = null): Observable<any> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Post,
            search: HttpService.buildURLSearchParams(paramMap).toString(),
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                //'Content-Type': 'application/json; charset=UTF-8'
            })
        }))
        .map((res: Response) => {
            let result: Result = res.json();
            // if (result.Code != 0) {
            //     this.nativeService.alert(result.Message);
            // }
            return result;
        });
    }

    public put(url: string, body: any = {}): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Put,
            body: body
        }));
    }

    public delete(url: string, paramMap: any = null): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Delete,
            search: HttpService.buildURLSearchParams(paramMap).toString()
        }));
    }

    public patch(url: string, body: any = {}): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Patch,
            body: body
        }));
    }

    public head(url: string, paramMap: any = null): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Head,
            search: HttpService.buildURLSearchParams(paramMap).toString()
        }));
    }

    public options(url: string, paramMap: any = null): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Options,
            search: HttpService.buildURLSearchParams(paramMap).toString()
        }));
    }

    /**
     * 将对象转为查询参数
     * @param paramMap
     * @returns {URLSearchParams}
     */
    private static buildURLSearchParams(paramMap): URLSearchParams {
        let params = new URLSearchParams();
        if (!paramMap) {
            return params;
        }
        for (let key in paramMap) {
            let val = paramMap[key];
            if (val instanceof Date) {
                val = Utils.dateFormat(val, 'yyyy-MM-dd hh:mm:ss')
            }
            params.set(key, val);
        }
        return params;
    }

    /**
     * 处理请求失败事件
     * @param url
     * @param options
     * @param err
     */
    private requestFailed(url: string, options: RequestOptionsArgs, err: Response): void {
        this.nativeService.hideLoading();
        //console.log('%c 请求失败 %c', 'color:red', '', 'url', url, 'options', options, 'err', err);
        if (err instanceof TimeoutError) {
            this.nativeService.alert('请求超时,请稍后再试!');
            return;
        }
        let msg = '请求发生异常';
        try {
            let result = err.json();
            this.nativeService.alert(result.message || msg);
        } catch (err) {
            let status = err.status;
            if (status === 0) {
                msg = '请求失败，请求响应出错';
            } else if (status === 404) {
                msg = '请求失败，未找到请求地址';
            } else if (status === 500) {
                msg = '请求失败，服务器出错，请稍后再试';
            }
            this.nativeService.alert(msg);
        }

    }

    /* private optionsAddToken(options: RequestOptionsArgs): void {
        let token = this.globalData.token;
        if (options.headers) {
            options.headers.append('Authorization', 'Bearer ' + token);
        } else {
            options.headers = new Headers({
                'Authorization': 'Bearer ' + token
            });
        }
    } */
}
