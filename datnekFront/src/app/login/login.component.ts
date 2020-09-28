import {Component, Input, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 loginForm: NgForm;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
  }

  initForm() {
  }

  /**
   * Connecte with email
   * @param $e
   */
  loginUser($e){
    $e.preventDefault();

    this.router.navigateByUrl('/pages/list-of-languages')
  }
}
