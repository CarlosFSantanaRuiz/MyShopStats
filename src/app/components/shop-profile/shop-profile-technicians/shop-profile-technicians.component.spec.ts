import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProfileTechniciansComponent } from './shop-profile-technicians.component';

describe('ShopProfileTechniciansComponent', () => {
  let component: ShopProfileTechniciansComponent;
  let fixture: ComponentFixture<ShopProfileTechniciansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopProfileTechniciansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProfileTechniciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
