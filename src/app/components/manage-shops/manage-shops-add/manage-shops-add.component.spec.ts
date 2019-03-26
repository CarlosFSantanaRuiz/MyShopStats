import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageShopsAddComponent } from './manage-shops-add.component';

describe('ManageShopsAddComponent', () => {
  let component: ManageShopsAddComponent;
  let fixture: ComponentFixture<ManageShopsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageShopsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageShopsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
