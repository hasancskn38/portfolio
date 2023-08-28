import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWrapperComponent } from './main-wrapper.component';

describe('MainWrapperComponent', () => {
  let component: MainWrapperComponent;
  let fixture: ComponentFixture<MainWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainWrapperComponent]
    });
    fixture = TestBed.createComponent(MainWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
