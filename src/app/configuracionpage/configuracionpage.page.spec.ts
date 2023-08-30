import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguracionpagePage } from './configuracionpage.page';

describe('ConfiguracionpagePage', () => {
  let component: ConfiguracionpagePage;
  let fixture: ComponentFixture<ConfiguracionpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfiguracionpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
