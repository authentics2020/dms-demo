import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EortypeComponent } from './eortype.component';

describe('EortypeComponent', () => {
  let component: EortypeComponent;
  let fixture: ComponentFixture<EortypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EortypeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EortypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
