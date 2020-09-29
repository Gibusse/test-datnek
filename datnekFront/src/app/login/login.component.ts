import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {WebServicesService} from "../webServices/web-services.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private ws: WebServicesService) { }

  ngOnInit() {
    this.initForm();
  }

  /**
   * Initiliase the form with FormBuilder
   */
  initForm() {
    this.loginForm = this.fb.group({
      userEmail: ['', Validators.required]
    })
  }

  /**
   * Register or login with email only
   * @param dataForm
   */
  loginUser(dataForm){
    this.ws.create('login', dataForm)
      .subscribe(
        res => console.log(res),
        error => console.error(error)
      )
  }
}
