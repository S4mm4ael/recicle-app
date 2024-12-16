import { FormBuilder } from '@angular/forms';
import { LoginPageForm } from './login.page.form';

describe('LoginPageForm', () => {
  it('should create login from empty', () => {
    const loginPageForm = new LoginPageForm(new FormBuilder());
    expect(loginPageForm.createForm()).not.toBeNull();
  });
});
