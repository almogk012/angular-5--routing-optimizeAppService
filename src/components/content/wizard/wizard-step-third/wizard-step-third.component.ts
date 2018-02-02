import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-wizard-step-third',
  templateUrl: './wizard-step-third.component.html'
})
export class WizardStepThirdComponent implements OnInit {
  form: FormGroup;
  categories:any;
  constructor( @Inject(FormBuilder) fb: FormBuilder) {
    this.categories = [

      {
        id: 5,
        categoryName: "name 5"
      },
      {
        id: 10,
        categoryName: "name 10"
      },
      {
        id: 10,
        categoryName: "name 10"
      },
      {
        id: 10,
        categoryName: "name 10"
      },
      {
        id: 10,
        categoryName: "name 10"
      }
    ]
    this.form = fb.group({
      group1: fb.group({
        detailsRadio: ''
      }),
      group2: fb.group({
        kindOfFile:this.categories
      })
    });
  }

  ngOnInit() {
  }

}
