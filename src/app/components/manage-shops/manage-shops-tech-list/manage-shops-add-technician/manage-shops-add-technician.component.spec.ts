import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageShopsAddTechnicianComponent } from './manage-shops-add-technician.component';

describe('ManageShopsAddTechnicianComponent', () => {
  let component: ManageShopsAddTechnicianComponent;
  let fixture: ComponentFixture<ManageShopsAddTechnicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageShopsAddTechnicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageShopsAddTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
