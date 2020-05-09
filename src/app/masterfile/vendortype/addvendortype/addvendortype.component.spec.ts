import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvendortypeComponent } from './addvendortype.component';

describe('AddvendortypeComponent', () => {
  let component: AddvendortypeComponent;
  let fixture: ComponentFixture<AddvendortypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddvendortypeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvendortypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
