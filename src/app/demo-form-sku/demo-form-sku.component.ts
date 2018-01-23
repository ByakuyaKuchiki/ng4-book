import { Component } from '@angular/core';
import { FormBuilder,
          FormGroup,
          Validators,
          AbstractControl } from "@angular/forms";
import { Validation } from "../tools/validations";

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css']
})
export class DemoFormSkuComponent{

  myForm: FormGroup;
  sku: AbstractControl;
  validation: Validation;

  constructor(fb: FormBuilder) {
    this.validation = new Validation();
    this.myForm = fb.group({
      'sku': ['', Validators.compose([Validators.required, this.validation.skuValidator])]
    });
    this.sku = this.myForm.controls['sku'];
   }

  onSubmit(form: any):void {
    console.log('submited', form);
  }
}
