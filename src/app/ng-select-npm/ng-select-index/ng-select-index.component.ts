import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-select-index',
  templateUrl: './ng-select-index.component.html',
  styleUrls: ['./ng-select-index.component.css']
})
export class NgSelectIndexComponent implements OnInit {

  selectedCar: number;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
