import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScfIndexComponent } from './scf-index.component';

describe('ScfIndexComponent', () => {
  let component: ScfIndexComponent;
  let fixture: ComponentFixture<ScfIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScfIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScfIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
