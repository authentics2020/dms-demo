import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatestatusComponent } from './gatestatus.component';

describe('GatestatusComponent', () => {
  let component: GatestatusComponent;
  let fixture: ComponentFixture<GatestatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GatestatusComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
