import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-bs-radio',
  templateUrl: './custom-bs-radio.component.html',
  styleUrls: ['./custom-bs-radio.component.scss']
})
export class CustomBsRadioComponent implements OnInit {

  customBsForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.customBsForm = new FormGroup({
      gender: new FormControl('', Validators.required)
    });
  }

  submit() {
    console.log(this.customBsForm.value);
  }

}
