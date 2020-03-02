import { Component } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms';
import {FormBuilder}from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb:FormBuilder){}

  registrationFrom = this.fb.group({
    userName : [''],
    password : [''],
    confirmPassword : ['']
  })
 /* registrationFrom = new FormGroup({
    userName : new FormControl('Sundaram C'),
    password : new FormControl(''),
    confirmPassword : new FormControl('')
  }); */
  loadApiData(){
    this.registrationFrom.patchValue({
      userName:'Sundaram C',
      password:'test',
      confirmPassword:'test'

    });

  }
}
