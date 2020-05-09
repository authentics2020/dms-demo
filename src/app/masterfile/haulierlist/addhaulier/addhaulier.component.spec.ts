import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhaulierComponent } from './addhaulier.component';

describe('AddhaulierComponent', () => {
  let component: AddhaulierComponent;
  let fixture: ComponentFixture<AddhaulierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddhaulierComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhaulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
