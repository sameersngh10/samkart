import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {



  addressForm: FormGroup
  constructor(private builder: FormBuilder) {

    this.addressForm = this.builder.group({
      Addname: ['', [Validators.required]],
      mNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      pincode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      locality: ['', [Validators.required]],
      AreaAdd: ['', [Validators.required]],
      city: ['', [Validators.required]],
      states: ['', [Validators.required]],



    })
  }
  onAdd() {
    console.log('clicked')
  }

  OnSubmit() {
    console.log(this.addressForm.value)
  }
}
