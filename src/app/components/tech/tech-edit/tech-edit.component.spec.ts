import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechEditComponent } from './tech-edit.component';

describe('TechEditComponent', () => {
  let component: TechEditComponent;
  let fixture: ComponentFixture<TechEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
