import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticiapagePage } from './noticiapage.page';

describe('NoticiapagePage', () => {
  let component: NoticiapagePage;
  let fixture: ComponentFixture<NoticiapagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NoticiapagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
