import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcommodityComponent } from './addcommodity.component';

describe('AddcommodityComponent', () => {
  let component: AddcommodityComponent;
  let fixture: ComponentFixture<AddcommodityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddcommodityComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcommodityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
