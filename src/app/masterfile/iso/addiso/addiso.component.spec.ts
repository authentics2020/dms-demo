import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddisoComponent } from './addiso.component';

describe('AddisoComponent', () => {
  let component: AddisoComponent;
  let fixture: ComponentFixture<AddisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddisoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
