import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProfileTechniciansFormComponent } from './shop-profile-technicians-form.component';

describe('ShopProfileTechniciansFormComponent', () => {
  let component: ShopProfileTechniciansFormComponent;
  let fixture: ComponentFixture<ShopProfileTechniciansFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopProfileTechniciansFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProfileTechniciansFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
