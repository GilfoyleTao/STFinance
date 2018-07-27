import { Component, Input, ElementRef, Renderer, Output, EventEmitter } from '@angular/core';
import { DaysCollectModel } from './CalendarModel';
@Component({
    selector: 'ion-calendar',
    templateUrl: 'Calendar.html',
})
export class CalendarComponent {
    DayCol: any = [];//设置日历格式
    Today: any;//获取今日时间
    CurrentYear: any;//获取今日所在年份
    CurrentMonth: any;//获取今日所在月份
    MonthDays: any;//获取本月天数
    FirstWeekDay: any;//获取今日所在月份的第一天是星期几
    L_DaysCollectModel: Array<DaysCollectModel>;//本月日期信息
    InitSignInfo: any;
    constructor(public elementRef: ElementRef, public renderer: Renderer) {
        this.Today = new Date();
        this.CurrentYear = this.Today.getFullYear();
        this.CurrentMonth = this.Today.getMonth() + 1;
        this.InitSignInfo = [
            { 'Date': 1, 'SignStatus': 'sign' },
            { 'Date': 2, 'SignStatus': 'sign' },
            { 'Date': 3, 'SignStatus': 'sign' },
            { 'Date': 4, 'SignStatus': 'sign' },
            { 'Date': 5, 'SignStatus': 'sign' },
            { 'Date': 6, 'SignStatus': 'sign' },
            { 'Date': 7, 'SignStatus': 'gift' },
            { 'Date': 8, 'SignStatus': 'sign' },
            { 'Date': 9, 'SignStatus': 'sign' },
            { 'Date': 10, 'SignStatus': 'sign' },
            { 'Date': 11, 'SignStatus': 'sign' },
            { 'Date': 12, 'SignStatus': 'sign' },
        ]
    }
    ngAfterViewInit() {
        this.InitCalendarLayOut();
        this.SetCalendar();
    }

    //获取今日所在月份
    InitCalendarLayOut() {
        for (var i = 0; i < 42; i++) {
            this.DayCol.push(i);
        }
    }
    //初始化本月日历
    SetCalendar() {
        this.L_DaysCollectModel = [];//初始化日历为空
        this.FirstWeekDay = new Date(this.CurrentYear, this.CurrentMonth - 1, 1).getDay();//获取本月第一天是周几 0
        this.MonthDays = this.getMonthDays(this.CurrentYear, this.CurrentMonth - 1); //本月30天
        //遍历给日历赋值
        for (let i = this.FirstWeekDay; i < (this.MonthDays + this.FirstWeekDay); i++) {
            let _DaysCollectModel = new DaysCollectModel();
            _DaysCollectModel.Date = i - this.FirstWeekDay + 1;//设置日期
            _DaysCollectModel.SignStatus = '';//初始化签到状态
            this.L_DaysCollectModel[i] = _DaysCollectModel;//赋值
        }
        this.SetSignInfo();
    }
    //初始化签到状态
    SetSignInfo() {
        this.L_DaysCollectModel.forEach((item, index) => {
            if(this.InitSignInfo[index]){
                item.SignStatus = this.InitSignInfo[index].SignStatus;
            }
        });
    }

    //上一月
    LastMonth() {
        if (this.CurrentMonth == 1) {
            this.CurrentYear--;
            this.CurrentMonth = 12;
        }
        else {
            this.CurrentMonth--;
        }
        this.SetCalendar();
    }
    //下一月
    NextMonth() {
        if (this.CurrentMonth == 12) {
            this.CurrentYear++;
            this.CurrentMonth = 1;
        }
        else {
            this.CurrentMonth++
        }
        this.SetCalendar();
    }

    //获取当前切换日期所在月份的总天数
    getMonthDays(year, month) {
        var monthAry = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (year % 400 == 0) {
            monthAry[1] = 29;
        } else {
            if (year % 4 == 0 && year % 100 != 0) {
                monthAry[1] = 29;
            }
        }
        return monthAry[month];
    }

    

}
