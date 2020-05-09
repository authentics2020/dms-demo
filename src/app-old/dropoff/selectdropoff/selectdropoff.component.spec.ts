import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectdropoffComponent } from './selectdropoff.component';

describe('SelectdropoffComponent', () => {
  let component: SelectdropoffComponent;
  let fixture: ComponentFixture<SelectdropoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectdropoffComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectdropoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
