import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { UsersService } from '../webServices/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder,
               private userService: UsersService) { }

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
    this.userService.login('login', dataForm)
      .subscribe(
        res => {
          if (res.token) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('userId', res.userId);
            this.router.navigateByUrl('/pages/list-of-languages');
          }
        },
        error => {}
      )
  }
}
