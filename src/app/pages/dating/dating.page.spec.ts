import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatingPage } from './dating.page';

describe('DatingPage', () => {
  let component: DatingPage;
  let fixture: ComponentFixture<DatingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
