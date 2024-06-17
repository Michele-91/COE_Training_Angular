import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/john/i)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form Submitted!', this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
  

  // myForm!: FormGroup;

  // constructor(private fb: FormBuilder) { }

  // ngOnInit() {
  //   this.myForm = this.fb.group({
  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]]
  //   });
  // }

  // onSubmit() {
  //   console.log('Form Submitted!', this.myForm.value);
  // }
}


export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
