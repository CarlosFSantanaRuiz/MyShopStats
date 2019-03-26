import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormShopInfoComponent } from './form-shop-info.component';

describe('FormShopInfoComponent', () => {
  let component: FormShopInfoComponent;
  let fixture: ComponentFixture<FormShopInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormShopInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormShopInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
