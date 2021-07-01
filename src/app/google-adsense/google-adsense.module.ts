import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleAdsenseRoutingModule } from './google-adsense-routing.module';
import { GoogleAdsenseIndexComponent } from './google-adsense-index/google-adsense-index.component';


@NgModule({
  declarations: [GoogleAdsenseIndexComponent],
  imports: [
    CommonModule,
    GoogleAdsenseRoutingModule
  ]
})
export class GoogleAdsenseModule { }
