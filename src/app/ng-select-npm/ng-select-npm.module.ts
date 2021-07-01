import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgSelectRoutingModule } from './ng-select-npm-routing.module';
import { NgSelectIndexComponent } from './ng-select-index/ng-select-index.component';


@NgModule({
  declarations: [NgSelectIndexComponent],
  imports: [
    CommonModule,
    NgSelectRoutingModule
  ]
})
export class NgSelectModule { }
