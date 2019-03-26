import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageShopsTechListComponent } from './manage-shops-tech-list.component';

describe('ManageShopsTechListComponent', () => {
  let component: ManageShopsTechListComponent;
  let fixture: ComponentFixture<ManageShopsTechListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageShopsTechListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageShopsTechListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
