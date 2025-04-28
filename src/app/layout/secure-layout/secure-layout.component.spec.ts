import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureLayoutComponent } from './secure-layout.component';

describe('SecureLayoutComponent', () => {
  let component: SecureLayoutComponent;
  let fixture: ComponentFixture<SecureLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SecureLayoutComponent]
    });
    fixture = TestBed.createComponent(SecureLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
