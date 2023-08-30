import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterpagePage } from './registerpage.page';

describe('RegisterpagePage', () => {
  let component: RegisterpagePage;
  let fixture: ComponentFixture<RegisterpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
