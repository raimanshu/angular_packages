import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgSelectIndexComponent } from './ng-select-index/ng-select-index.component';

const routes: Routes = [
  {path: '', component: NgSelectIndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgSelectRoutingModule { }
