import { Component, AfterViewInit } from '@angular/core';
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
export class DemoFormSkuComponent implements AfterViewInit{

  myForm: FormGroup;
  name: AbstractControl;
  validation: Validation;
  storedName: string;
  solvedForm: string;
  submitted: boolean;

  constructor(fb: FormBuilder) {

    this.submitted = false;
    this.validation = new Validation();
    this.myForm = fb.group({
      'name': ['', Validators.compose([Validators.required, this.validation.skuValidator])]
    });
    this.name = this.myForm.controls['name'];

    this.name.valueChanges.subscribe((value: string) => {
      this.submitted = false;
      if(!value){
        this.storedName = 'empty';
      }else{
        this.storedName = value;
      }
    });
   }

  onSubmit(form: any):void {
    if(this.myForm.valid){
      this.solvedForm = form;
      this.submitted = true;
    }
  }


  loggedUser(log: boolean){
    if(log){
      this.name.setValue('');
    }
  }

  ngAfterViewInit(){
    $("#inpt_search").on('focus', function () {
      $(this).parent('label').addClass('active');
    });
    
    $("#inpt_search").on('blur', function () {
      if($(this).val().length == 0)
        $(this).parent('label').removeClass('active');
    });
  }
}
