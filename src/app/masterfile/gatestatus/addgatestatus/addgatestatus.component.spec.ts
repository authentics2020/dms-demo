import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgatestatusComponent } from './addgatestatus.component';

describe('AddgatestatusComponent', () => {
  let component: AddgatestatusComponent;
  let fixture: ComponentFixture<AddgatestatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddgatestatusComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgatestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
