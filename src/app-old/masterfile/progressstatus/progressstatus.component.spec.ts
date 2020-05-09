import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressstatusComponent } from './progressstatus.component';

describe('ProgressstatusComponent', () => {
  let component: ProgressstatusComponent;
  let fixture: ComponentFixture<ProgressstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressstatusComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
