import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeJsNormalImpIndexComponent } from './stripe-js-normal-imp-index.component';

describe('StripeJsNormalImpIndexComponent', () => {
  let component: StripeJsNormalImpIndexComponent;
  let fixture: ComponentFixture<StripeJsNormalImpIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripeJsNormalImpIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeJsNormalImpIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
