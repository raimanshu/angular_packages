import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgmPackageIndexComponent } from './agm-package-index.component';

describe('AgmPackageIndexComponent', () => {
  let component: AgmPackageIndexComponent;
  let fixture: ComponentFixture<AgmPackageIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgmPackageIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgmPackageIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
