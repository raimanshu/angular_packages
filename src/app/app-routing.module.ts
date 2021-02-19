import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgmPackageIndexComponent } from './agm-package/agm-package-index/agm-package-index.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  {
    path: 'stripe-js-normal-imp',
    loadChildren: () => import('./stripe-js-normal-imp/stripe-js-normal-imp.module').then(m => m.StripeJsNormalImpModule)
  },
  {
    path: 'ngx-paypal-package',
    loadChildren: () => import('./ngx-paypal-package/ngx-paypal-package.module').then(m => m.NgxPaypalPackageModule)
  },
  {
    path: 'agm-package',
    loadChildren: () => import('./agm-package/agm-package.module').then(m => m.AgmPackageModule)
  },
  {
    path: 'stripe-js-checkout-form',
    loadChildren: () => import('./stripe-js-checkout-form/stripe-js-checkout-form.module').then(m => m.StripeJsCheckoutFormModule)
  },
  { path: '',   redirectTo: 'intro', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: IntroComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
