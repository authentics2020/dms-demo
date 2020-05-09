import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprogressstatusComponent } from './addprogressstatus.component';

describe('AddprogressstatusComponent', () => {
  let component: AddprogressstatusComponent;
  let fixture: ComponentFixture<AddprogressstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprogressstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprogressstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
