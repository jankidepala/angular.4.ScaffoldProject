import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  rForm: FormGroup;
  post: any;
  description = '';
  name = '';
  titleAlert = 'This field is required';

  f = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl()
  });
  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate': ''
    });
  }
  addPost(post) {
    this.description = post.description;
    this.name = post.name;
  }
  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(

      (validate) => {

        if (validate === '1') {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();

      });
  }



}
