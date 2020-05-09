import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkliftjobstatusComponent } from './forkliftjobstatus.component';

describe('ForkliftjobstatusComponent', () => {
  let component: ForkliftjobstatusComponent;
  let fixture: ComponentFixture<ForkliftjobstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForkliftjobstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkliftjobstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
