import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageShopsExistingTechnicianComponent } from './manage-shops-existing-technician.component';

describe('ManageShopsExistingTechnicianComponent', () => {
  let component: ManageShopsExistingTechnicianComponent;
  let fixture: ComponentFixture<ManageShopsExistingTechnicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageShopsExistingTechnicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageShopsExistingTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
