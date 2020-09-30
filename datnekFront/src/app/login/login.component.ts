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
        res => {
          if (res.affectedRows === 1 || res[0]) {
            if (res.insertId) {
              localStorage.setItem('id', res.insertId);
              this.router.navigate(['/pages/list-of-languages', res.Id]);
            }
            if(res[0].Id) {
              localStorage.setItem('id', res[0].Id);
              this.router.navigate(['/pages/list-of-languages', res[0].Id])
            }
          }
        },
        error => {}
      )
  }
}
