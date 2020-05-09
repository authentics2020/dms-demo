import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatetypeComponent } from './gatetype.component';

describe('GatetypeComponent', () => {
  let component: GatetypeComponent;
  let fixture: ComponentFixture<GatetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GatetypeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
