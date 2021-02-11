import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'stripe-js-normal-imp',
    loadChildren: () => import('./stripe-js-normal-imp/stripe-js-normal-imp.module').then(m => m.StripeJsNormalImpModule)
  },
  {
    path: 'ngx-paypal-package',
    loadChildren: () => import('./ngx-paypal-package/ngx-paypal-package.module').then(m => m.NgxPaypalPackageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
