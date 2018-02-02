import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-wizard-step-one',
  templateUrl: './wizard-step-one.component.html'
})
export class WizardStepOneComponent implements OnInit {

  form: FormGroup;
  categories: any;
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
        degree: this.categories,
        // degree: ['', Validators.minLength(2)],
        country: '',
        city: '',
        nameOfUniversity: ''
      }),
      group2: fb.group({
        specialty: ['', Validators.minLength(2)],
        dateStartStudies: 'Drew',
        dateEndStudies: 'Drew',
        countYearsStudies: 'Drew',
        dateGetDegree: 'Drew',
      }),
      group3: fb.group({
        branchInIsrael: ['', Validators.minLength(2)],
        MethodOfStudy: '',
        OtherMethodOfStudy: ''
      })
    });


  }

  ngOnInit() {
  }

}
