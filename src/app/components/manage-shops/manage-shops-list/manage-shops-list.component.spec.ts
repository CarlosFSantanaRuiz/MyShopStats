import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageShopsListComponent } from './manage-shops-list.component';

describe('ManageShopsListComponent', () => {
  let component: ManageShopsListComponent;
  let fixture: ComponentFixture<ManageShopsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageShopsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageShopsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
