import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAdsenseIndexComponent } from './google-adsense-index.component';

describe('GoogleAdsenseIndexComponent', () => {
  let component: GoogleAdsenseIndexComponent;
  let fixture: ComponentFixture<GoogleAdsenseIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleAdsenseIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleAdsenseIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
