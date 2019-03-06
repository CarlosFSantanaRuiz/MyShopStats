import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProfileInfoComponent } from './shop-profile-info.component';

describe('ShopProfileInfoComponent', () => {
  let component: ShopProfileInfoComponent;
  let fixture: ComponentFixture<ShopProfileInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopProfileInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProfileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
