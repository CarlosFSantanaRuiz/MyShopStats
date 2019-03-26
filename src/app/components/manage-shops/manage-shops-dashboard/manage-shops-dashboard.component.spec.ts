import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageShopsDashboardComponent } from './manage-shops-dashboard.component';

describe('ManageShopsDashboardComponent', () => {
  let component: ManageShopsDashboardComponent;
  let fixture: ComponentFixture<ManageShopsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageShopsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageShopsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
