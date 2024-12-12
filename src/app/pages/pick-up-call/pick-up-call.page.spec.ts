import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickUpCallPage } from './pick-up-call.page';

describe('PickUpCallPage', () => {
  let component: PickUpCallPage;
  let fixture: ComponentFixture<PickUpCallPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PickUpCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
