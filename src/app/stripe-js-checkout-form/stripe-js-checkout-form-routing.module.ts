import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScfIndexComponent } from './scf-index/scf-index.component';

const routes: Routes = [
  {
    path: '',
    component: ScfIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StripeJsCheckoutFormRoutingModule { }
