import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgatetypeComponent } from './addgatetype.component';

describe('AddgatetypeComponent', () => {
  let component: AddgatetypeComponent;
  let fixture: ComponentFixture<AddgatetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgatetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgatetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
