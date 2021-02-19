import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StripeJsCheckoutFormRoutingModule } from './stripe-js-checkout-form-routing.module';
import { ScfIndexComponent } from './scf-index/scf-index.component';


@NgModule({
  declarations: [ScfIndexComponent],
  imports: [
    CommonModule,
    StripeJsCheckoutFormRoutingModule
  ]
})
export class StripeJsCheckoutFormModule { }
