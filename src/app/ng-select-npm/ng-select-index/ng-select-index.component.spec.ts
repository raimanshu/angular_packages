import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSelectIndexComponent } from './ng-select-index.component';

describe('NgSelectIndexComponent', () => {
  let component: NgSelectIndexComponent;
  let fixture: ComponentFixture<NgSelectIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSelectIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSelectIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
