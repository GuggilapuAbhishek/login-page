import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myFormGroup: FormGroup;


  constructor(private fb: FormBuilder) {
    this.myFormGroup = this.fb.group({});  // Initialize with an empty form group
  }

  ngOnInit(): void {
    this.myFormGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(form: FormGroup): void {
    console.log('Valid:', form.valid); // true or false
    console.log('Name:', form.value.name);
    console.log('Email:', form.value.email);
    console.log('Message:', form.value.message);
  }
}
