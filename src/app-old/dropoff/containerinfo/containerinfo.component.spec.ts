import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerinfoComponent } from './containerinfo.component';

describe('ContainerinfoComponent', () => {
  let component: ContainerinfoComponent;
  let fixture: ComponentFixture<ContainerinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerinfoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
