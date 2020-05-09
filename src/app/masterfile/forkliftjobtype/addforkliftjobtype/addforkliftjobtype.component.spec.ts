import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddforkliftjobtypeComponent } from './addforkliftjobtype.component';

describe('AddforkliftjobtypeComponent', () => {
  let component: AddforkliftjobtypeComponent;
  let fixture: ComponentFixture<AddforkliftjobtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddforkliftjobtypeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddforkliftjobtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
