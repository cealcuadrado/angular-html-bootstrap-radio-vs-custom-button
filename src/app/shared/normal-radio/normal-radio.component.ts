import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-radio',
  templateUrl: './normal-radio.component.html',
  styleUrls: ['./normal-radio.component.scss']
})
export class NormalRadioComponent implements OnInit {

  normalForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.normalForm = new FormGroup({
      gender: new FormControl('', Validators.required)
    });
  }

  submit() {
    console.log(this.normalForm.value);
  }

}
