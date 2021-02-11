import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPaypalPackageRoutingModule } from './ngx-paypal-package-routing.module';
import { NgxPaypalPackageIndexComponent } from './ngx-paypal-package-index/ngx-paypal-package-index.component';
import { NgxPayPalModule } from 'ngx-paypal';


@NgModule({
  declarations: [NgxPaypalPackageIndexComponent],
  imports: [
    CommonModule,
    NgxPaypalPackageRoutingModule,
    NgxPayPalModule,
  ]
})
export class NgxPaypalPackageModule { }
