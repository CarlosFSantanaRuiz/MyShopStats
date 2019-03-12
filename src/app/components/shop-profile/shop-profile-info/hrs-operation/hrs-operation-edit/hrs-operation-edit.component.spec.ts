import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrsOperationEditComponent } from './hrs-operation-edit.component';

describe('HrsOperationEditComponent', () => {
  let component: HrsOperationEditComponent;
  let fixture: ComponentFixture<HrsOperationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrsOperationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrsOperationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
