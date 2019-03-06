import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProfileDashboardComponent } from './shop-profile-dashboard.component';

describe('ShopProfileDashboardComponent', () => {
  let component: ShopProfileDashboardComponent;
  let fixture: ComponentFixture<ShopProfileDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopProfileDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProfileDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
