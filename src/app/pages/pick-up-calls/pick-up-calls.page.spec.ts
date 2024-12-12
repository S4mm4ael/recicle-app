import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickUpCallsPage } from './pick-up-calls.page';

describe('PickUpCallsPage', () => {
  let component: PickUpCallsPage;
  let fixture: ComponentFixture<PickUpCallsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PickUpCallsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
