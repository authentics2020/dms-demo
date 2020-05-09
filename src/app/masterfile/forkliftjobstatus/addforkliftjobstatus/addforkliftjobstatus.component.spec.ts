import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddforkliftjobstatusComponent } from './addforkliftjobstatus.component';

describe('AddforkliftjobstatusComponent', () => {
  let component: AddforkliftjobstatusComponent;
  let fixture: ComponentFixture<AddforkliftjobstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddforkliftjobstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddforkliftjobstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
