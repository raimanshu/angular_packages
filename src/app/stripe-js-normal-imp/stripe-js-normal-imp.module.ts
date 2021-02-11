import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StripeJsNormalImpRoutingModule } from './stripe-js-normal-imp-routing.module';
import { StripeJsNormalImpIndexComponent } from './stripe-js-normal-imp-index/stripe-js-normal-imp-index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [StripeJsNormalImpIndexComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StripeJsNormalImpRoutingModule
  ]
})
export class StripeJsNormalImpModule { }
