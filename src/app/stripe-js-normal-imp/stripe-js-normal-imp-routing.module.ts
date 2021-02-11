import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StripeJsNormalImpIndexComponent } from './stripe-js-normal-imp-index/stripe-js-normal-imp-index.component';

const routes: Routes = [
  {
    path: '',
    component: StripeJsNormalImpIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StripeJsNormalImpRoutingModule { }
