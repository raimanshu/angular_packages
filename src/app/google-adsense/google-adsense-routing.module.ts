import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleAdsenseIndexComponent } from './google-adsense-index/google-adsense-index.component';

const routes: Routes = [
  {path:'', component: GoogleAdsenseIndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleAdsenseRoutingModule { }
