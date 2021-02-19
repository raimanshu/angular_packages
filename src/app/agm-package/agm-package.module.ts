import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmPackageRoutingModule } from './agm-package-routing.module';
import { AgmPackageIndexComponent } from './agm-package-index/agm-package-index.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AgmPackageRoutingModule,
    // AgmCoreModule.forRoot({
    //   apiKey: environment.google_map_key
    // })
  ]
})
export class AgmPackageModule { }
