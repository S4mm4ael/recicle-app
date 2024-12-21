import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrorMessageComponent } from './error-message.component';
import { FormGroup, FormControl } from '@angular/forms';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorMessageComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should show error message on field touched and error is present', () => {
    component.form = new FormGroup({ email: new FormControl() });

    component.form.markAsTouched();
    component.form.setErrors({ required: true });
    component.error = 'required';

    expect(component.shouldShow()).toBe(true);
  });

  it('should not show error message on field touched and no error is present', () => {
    component.form = new FormGroup({ email: new FormControl() });

    component.form.markAsTouched();
    component.form.setErrors({ anyError: true });
    component.error = 'anyError';

    expect(component.shouldShow()).toBe(false);
  });

  it('should hide error message on field not touched', () => {
    component.form = new FormGroup({ email: new FormControl() });

    component.form.setErrors({ required: true });
    component.error = 'required';

    expect(component.shouldShow()).toBe(false);
  });
});
