import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntroComponent } from './intro/intro.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { ComponentsModule } from './shared/components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: environment.google_map_key
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
