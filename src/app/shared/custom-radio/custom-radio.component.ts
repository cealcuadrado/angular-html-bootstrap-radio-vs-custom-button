import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.scss']
})
export class CustomRadioComponent implements OnInit {

  customForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.customForm = new FormGroup({
      gender: new FormControl('', Validators.required)
    });
  }

  submit() {
    console.log(this.customForm.value);
  }
}
