import { Component } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.scss']
})
export class TemplateFormsComponent {
  submitted = false;

  onSubmit(form: any) {
    this.submitted = true;
    console.log('Form Submitted!', form);
  }
}
