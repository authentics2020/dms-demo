import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkliftjobtypeComponent } from './forkliftjobtype.component';

describe('ForkliftjobtypeComponent', () => {
  let component: ForkliftjobtypeComponent;
  let fixture: ComponentFixture<ForkliftjobtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForkliftjobtypeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkliftjobtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
