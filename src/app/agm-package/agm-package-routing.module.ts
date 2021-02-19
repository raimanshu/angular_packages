import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgmPackageIndexComponent } from './agm-package-index/agm-package-index.component';

const routes: Routes = [
  {
    path: '',
    component: AgmPackageIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgmPackageRoutingModule { }
