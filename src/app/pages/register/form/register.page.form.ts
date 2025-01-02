import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidatorFn } from '@angular/forms';

export class RegisterPageForm {
  private formBuilder: FormBuilder;
  private form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.form = this.createForm();
  }

  private createForm(): FormGroup {
    let form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required]],
      address: this.formBuilder.group({
        street: ['', [Validators.required]],
        number: ['', [Validators.required]],
        neighborhood: ['', [Validators.required]],
        complement: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zip: ['', [Validators.required]],
      }),
    });

    form.get('repeatPassword')?.setValidators(matchPassword(form));

    return form;
  }

  getForm(): FormGroup {
    return this.form;
  }
}

function matchPassword(form: FormGroup): ValidatorFn {
  const password = form.get('password');
  const repeatPassword = form.get('repeatPassword');

  const validator = () => {
    return password?.value === repeatPassword?.value
      ? null
      : { passwordNotMatch: true };
  };

  return validator;
}
