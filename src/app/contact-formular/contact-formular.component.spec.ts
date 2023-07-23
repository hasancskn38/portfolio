import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormularComponent } from './contact-formular.component';

describe('ContactFormularComponent', () => {
  let component: ContactFormularComponent;
  let fixture: ComponentFixture<ContactFormularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactFormularComponent]
    });
    fixture = TestBed.createComponent(ContactFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
