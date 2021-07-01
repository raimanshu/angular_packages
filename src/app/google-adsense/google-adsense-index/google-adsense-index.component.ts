import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-adsense-index',
  templateUrl: './google-adsense-index.component.html',
  styleUrls: ['./google-adsense-index.component.css']
})
export class GoogleAdsenseIndexComponent implements OnInit {

  constructor() { }

  soltnumber = [
    { id: 1, adSlot: 1326766520 },
    { id: 2, adSlot: 4882868155 },
    { id: 3, adSlot: 3378214796 },
    { id: 4, adSlot: 7125888112 },
    { id: 5, adSlot: 9303375181 },
    { id: 6, adSlot: 3274273018 },
    { id: 7, adSlot: 1326766520 },
    { id: 8, adSlot: 4882868155 },
    { id: 9, adSlot: 3378214796 },
    { id: 10, adSlot: 7125888112 },
    { id: 11, adSlot: 9303375181 },
    { id: 12, adSlot: 3274273018 },
    { id: 13, adSlot: 1326766520 },
    { id: 14, adSlot: 4882868155 },
    { id: 15, adSlot: 9303375181 },
  ];
  shownumberlisting = [];
  // soltnumber = googleadslisting;

  ngOnInit() {
    for (var i = 0; i < 15; i++) {
      this.shownumberlisting.push(this.soltnumber[i]);
    }
  }

}
