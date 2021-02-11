import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPaypalPackageIndexComponent } from './ngx-paypal-package-index/ngx-paypal-package-index.component';

const routes: Routes = [
  {
    path:'',
    component: NgxPaypalPackageIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxPaypalPackageRoutingModule { }
