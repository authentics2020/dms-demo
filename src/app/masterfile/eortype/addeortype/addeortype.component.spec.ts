import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeortypeComponent } from './addeortype.component';

describe('AddeortypeComponent', () => {
  let component: AddeortypeComponent;
  let fixture: ComponentFixture<AddeortypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddeortypeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeortypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
