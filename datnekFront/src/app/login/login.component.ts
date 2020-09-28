import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    console.log(!this.loginForm.valid)
  }

  initForm() {
    this.loginForm = this.fb.group({
      userEmail: ['']
    })
  }

  loginUser($e){
    $e.preventDefault();
    console.log(this.loginForm)
  }
}
