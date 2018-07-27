import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
//components
import { CalendarComponent } from './Calendar/Calendar';
//service
//plugin

export const components = [
  CalendarComponent,
];

@NgModule({
  declarations: [components],
  imports: [IonicModule],
  exports: [components],
  providers: [
  ]
})
export class ComponentsModule { }
