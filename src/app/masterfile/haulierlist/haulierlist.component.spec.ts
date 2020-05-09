import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaulierlistComponent } from './haulierlist.component';

describe('HaulierlistComponent', () => {
  let component: HaulierlistComponent;
  let fixture: ComponentFixture<HaulierlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HaulierlistComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaulierlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
