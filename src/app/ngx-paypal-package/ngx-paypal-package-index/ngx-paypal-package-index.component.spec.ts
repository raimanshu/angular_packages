import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPaypalPackageIndexComponent } from './ngx-paypal-package-index.component';

describe('NgxPaypalPackageIndexComponent', () => {
  let component: NgxPaypalPackageIndexComponent;
  let fixture: ComponentFixture<NgxPaypalPackageIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPaypalPackageIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPaypalPackageIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
