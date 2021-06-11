import { Component } from '@angular/core';
declare var Stripe:any;
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toggleSideNav(){
    $('#sidebar').toggleClass('active');
  }

}
